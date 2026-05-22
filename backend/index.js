import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.use(express.json());

app.listen(5000, () => console.log("server is running"));
