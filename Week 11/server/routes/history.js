import express from "express"
import { clearHistory, getHistory, recordHistory } from "../controllers/historyController.js"
const historyRouter = express.Router()

historyRouter.get("/", getHistory)
historyRouter.post("/record", recordHistory)
historyRouter.post("/clear", clearHistory)

export default historyRouter