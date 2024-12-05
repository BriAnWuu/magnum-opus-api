import express from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router
    .route("/:id")
    .patch(userController.update);

export default router;