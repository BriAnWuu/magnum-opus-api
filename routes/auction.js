import express from "express";
import * as auctionController from "../controllers/auction-controller.js";

const router = express.Router();

router
    .route("/:artworkId")
    .get(auctionController.get);

router
    .route("/:id/bids")
    .get(auctionController.getBids)

export default router;