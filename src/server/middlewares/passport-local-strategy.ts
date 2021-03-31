import * as passport from 'passport';
import * as passportLocal from 'passport-local';

import { compareHash } from "../utils/passwords";

import Users from '../models/Users'


passport.serializeUser((user: any, done) => {
    done(null, user)
})
passport.deserializeUser((user: any, done) => {
    done(null, user)
})

passport.use(new passportLocal.Strategy(
    {
        usernameField: 'email',
        passwordField: 'pass',
    },
    (email, pass, done) => {
        try {
            Users.findOne({ email })
                .then(user => {
                    if (user) {
                        if (compareHash(pass, user.password)) {
                            //if password is correct
                            let u = {
                                handle: user.handle,
                                email: user.email,
                                id: user._id
                            };
                            done(null, u)
                        } else {
                            //incorrect passwrd
                            done(null, false, { message: 'incorrect message' })
                        }
                    } else {
                        //user not found in db
                        done(null, false, { message: 'no accout exist with the credintials' })
                    }
                })
        } catch (error) {
            console.log(error + "--------- this is the error");
            done(error)
        }
    }

))