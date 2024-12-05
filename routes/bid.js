import express from "express";
import * as bidController from "../controllers/bid-controller.js";

const router = express.Router();

router
    .route("/")
    .post(bidController.postBid);

export default router;