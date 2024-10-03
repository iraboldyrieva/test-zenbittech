import express from "express";
import { addDeal, getDeals } from "../controllers/dealController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/deals", getDeals);

router.post("/deals", upload.single("image"), addDeal);

export default router;
