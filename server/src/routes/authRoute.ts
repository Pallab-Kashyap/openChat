import { Router } from "express";
import { logIn } from "../controllers/authController";

const router = Router()

router.route('/login')
    .post(logIn)