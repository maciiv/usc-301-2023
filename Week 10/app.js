import express from "express"
import * as dotenv from "dotenv"
import historyRouter from "./routes/history.js"
import authRouter from "./routes/auth.js"
import connect from "./db.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use("/api/history", historyRouter)
app.use("/api/auth", authRouter)

const dbConnection = await connect()

if (dbConnection) {
    const port = process.env.PORT !== undefined ? process.env.PORT : 3000
    app.listen(port, (e) => {
        if (!e) {
            console.log(`Server running in port ${port}`)
        } else {
            console.log("Error occurred, the server can't start")
        }
    })
} else {
    console.log("Cannot initialize server due to database connection error")
}
