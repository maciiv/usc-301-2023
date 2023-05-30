import express from "express"
import * as dotenv from "dotenv"
import historyRouter from "./routes/history.js"
import authRouter from "./routes/auth.js"
import connect from "./db.js"
import session from "express-session"
import cookieParser from "cookie-parser"
import passport from "passport"
import passportConfig from "./passportConfig.js"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
passportConfig(passport)

app.use("/api/history", historyRouter)
app.use("/api/auth", authRouter)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  })

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
