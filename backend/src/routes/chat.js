import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import { getQueryEmbedding } from "../utils/queryEmbedding.js";
import { searchSimilarDocs } from "../utils/searchSimilarDocs.js";

dotenv.config();

const chatRouter = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

chatRouter.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;

    // 1. convert question → embedding
    const embedding = await getQueryEmbedding(question);

    // 2. retrieve similar chunks
    const docs = await searchSimilarDocs(embedding);

    const context = docs.map((d) => d.content).join("\n");

    // 3. ask GPT with context
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "Answer only from the provided context.",
        },
        {
          role: "user",
          content: `Context:\n${context}\n\nQuestion: ${question}`,
        },
      ],
    });

    res.json({
      answer: response.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default chatRouter;
