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
    results: inputSchema
}, { timestamps: true })

const History = mongoose.model("Hitorie", historySchema)

export default History