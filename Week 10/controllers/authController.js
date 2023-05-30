import User from "../models/user.js"

export const signin = async (req, res) => {
    const body = req.body
    try {
        const user = new User(body)
        const save = await user.save()
        res.send(save)
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

export const login = async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const user = await User.findOne({ "email": body.email })
        console.log(user)
        res.send(user)

    } catch (e) {
        res.status(500).send({ error: e })
    }
}