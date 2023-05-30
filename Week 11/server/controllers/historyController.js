import History from "../models/history.js"

export const getHistory = async (req, res) => {
    const user = req.user
    if (user === undefined) return res.status(401).send("User is not logged in")

    try {
        const histories = await History.find({ userId: user.id })
        res.send(histories)
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

export const recordHistory = async (req, res) => {
    if (req.body.userId === undefined) return res.status(401).send("User is not logged in")
    try {
        const history = new History(req.body)
        const save = await history.save()
        res.send(save)
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

export const clearHistory = async (req, res) => {
    const user = req.user
    if (user === undefined) return res.status(401).send("User is not logged in")

    try {
        await History.deleteMany({ userId: user.id })
        res.status(200).send("History cleared")
    } catch (e) {
        res.status(500).send({ error: e })
    }
}