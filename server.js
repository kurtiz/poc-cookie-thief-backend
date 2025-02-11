import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import dataRouter from "./routes/data.route.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

/**
 * Parses incoming request bodies as JSON.
 */
app.use(bodyParser.json());


app.use("/api/v1/", dataRouter);

const PORT = process.env.PORT || 50000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
