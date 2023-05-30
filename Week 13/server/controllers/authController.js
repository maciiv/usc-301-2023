import User from "../models/user.js"
import * as bcrypt from "bcrypt"
import passport from "passport"

export const signin = async (req, res) => {
    try {
        const user = await User.findOne({ "email": req.email })
        if (user !== null) {
            res.status(400).send( { error: "User already exists" })
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            const save = await newUser.save()
            res.send(save)
        }       
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

export const login = async (req, res) => {
    try {
        passport.authenticate("local", (err, user, info, status) => { 
            if (err) throw err
            if (!user) res.status(400).send("No user exists")
            else {
                req.logIn(user, err => {
                    if (err) throw err
                    res.status(200).send({ message: "Sucessfully authenticated" })
                })
            }
        })(req, res)

    } catch (e) {
        res.status(500).send({ error: e })
    }
}

export const getUser = async (req, res) => {
    res.send(req.user)
}

export const logout = async (req, res) => {
    req.logout(err => {
        if (err) throw err
        res.status(200).send("User logout successfully")
    })
}