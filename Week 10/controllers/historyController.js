import History from "../models/history.js"

export const getHistory = async (req, res) => {
    try {
        const histories = await History.find()
        res.send(histories)
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

export const recordHistory = async (req, res) => {
    const body = req.body
    try {
        const history = new History(body)
        const save = await history.save()
        res.send(save)
    } catch (e) {
        res.status(500).send({ error: e })
    }
}