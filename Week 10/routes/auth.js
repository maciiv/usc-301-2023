import express from "express"
import { login, signin } from "../controllers/authController.js"
const authRouter = express.Router()

authRouter.post("/signin", signin)

authRouter.post("/login", login)

export default authRouter