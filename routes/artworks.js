import express from "express";
import * as artworksController from "../controllers/artworks-controller.js";

const router = express.Router();

router
    .route("/")
    .get(artworksController.getAll);

router
    .route("/:id")
    .get(artworksController.get);

export default router;