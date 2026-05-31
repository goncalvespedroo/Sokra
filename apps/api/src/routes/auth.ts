import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/auth";

const router = Router();
const authController = new AuthController();

router.post("/register", authController.register.bind(authController));
router.post("/login", authController.logIn.bind(authController));
router.get("/user", authMiddleware, authController.getUser.bind(authController));

export default router;
