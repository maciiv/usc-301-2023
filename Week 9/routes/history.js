import express from "express"
import { getHistory, recordHistory } from "../controllers/historyController.js"
const historyRouter = express.Router()

historyRouter.get("/", getHistory)

historyRouter.post("/record", recordHistory)

export default historyRouter