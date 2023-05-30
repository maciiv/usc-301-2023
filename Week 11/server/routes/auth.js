import express from "express"
import { login, signin, getUser, logout } from "../controllers/authController.js"
const authRouter = express.Router()

authRouter.post("/signin", signin)
authRouter.post("/login", login)
authRouter.get("/user", getUser)
authRouter.post("/logout", logout)

export default authRouter