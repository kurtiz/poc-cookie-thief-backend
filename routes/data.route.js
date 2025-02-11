import express from "express";
import {getData, saveData} from "../controllers/data.controller.js";

const dataRouter = express.Router();

dataRouter.post("/data", saveData);
dataRouter.get("/data", getData);

export default dataRouter;