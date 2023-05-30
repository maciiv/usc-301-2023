import express from "express"
import * as dotenv from "dotenv"
import historyRouter from "./routes/history.js"
import authRouter from "./routes/auth.js"

const app = express()
dotenv.config()

app.use("/history", historyRouter)
app.use("/auth", authRouter)

const port = process.env.PORT !== undefined ? process.env.PORT : 3000
app.listen(port, (e) => {
    if (!e) {
        console.log(`Server running in port ${port}`)
    } else {
        console.log("Error occurred, the server can't start")
    }
})