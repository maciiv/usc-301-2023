import mongoose from "mongoose";

const Schema = mongoose.Schema

const inputSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
})

const historySchema = new Schema({
    inputs: [inputSchema],
    result: inputSchema,
    userId: String,
}, { timestamps: true })

const History = mongoose.model("Historie", historySchema)

export default History