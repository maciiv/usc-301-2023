import User from "./models/user.js"
import * as bcrypt from "bcrypt"
import passport_local from "passport-local"

const localStrategy = passport_local.Strategy

const passportConfig = (passport) => {
    passport.use(
        new localStrategy({
            usernameField: "email",
            passwordField: "password"
        }, async (username, password, done) => {
            try {
                const user = await User.findOne({ email: username })
                if (user === null) return done(null, false)
                const isValid = await bcrypt.compare(password, user.password)
                if (isValid) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }  
            } catch (e) {
                console.log(e)
                throw e
            }
            
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })

    passport.deserializeUser(async (id, cb) => {
        try {
            const user = await User.findById(id)
            const userInformation = {
                "id": user.id,
                "name": user.name
            }
            cb(null, userInformation)
        } catch (e) {
            console.log(e)
            cb(e)
        }
        
    })
}

export default passportConfig