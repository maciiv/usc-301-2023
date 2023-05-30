import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config()

const dbUri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongocloud.g7xwlji.mongodb.net/
    ${process.env.MONGO_DB}?retryWrites=true&w=majority`

const connect = async () => {
    try {
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database connected")
        return true
    } catch(e) {
        console.log(e)
        return false
    }   
}

export default connect