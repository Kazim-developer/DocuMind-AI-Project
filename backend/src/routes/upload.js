import multer from "multer";
import express from "express";
import { extractTextFromPDF } from "../utils/pdf.js";
import { chunkText } from "../utils/chunkText.js";
import { getEmbedding } from "../utils/embedding.js";
import { storeEmbedding } from "../utils/storeEmbeddings.js";

const fileUploadRouter = express.Router();

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});

fileUploadRouter.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "no file uploaded" });
    }

    const text = await extractTextFromPDF(req.file.buffer);

    const chunks = chunkText(text);

    for (const chunk of chunks) {
      const embedding = await getEmbedding(chunk);

      await storeEmbedding(chunk, embedding);
    }

    return res.json({
      message: "PDF processed successfully",
      totalChunks: chunks.length,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
});

export default fileUploadRouter;
