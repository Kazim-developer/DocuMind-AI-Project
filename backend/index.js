import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUploadRouter from "./src/routes/upload.js";
import chatRouter from "./src/routes/chat.js";

dotenv.config();

const app = express();

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.use(express.json());

app.use(fileUploadRouter);
app.use(chatRouter);

app.listen(5000, () => console.log("server is running"));
