import * as passport from 'passport';
import * as passportLocal from 'passport-local';

import { compareHash } from "../utils/passwords";

import Users from '../models/Users'


passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

passport.use(new passportLocal.Strategy(
    {
        usernameField: 'email',
        passwordField: 'pass'
    },
    (email, pass, done) => {
        try {

            Users.findOne({ email })
                .then(user => {
                    if (user) {
                        if (compareHash(pass, user.password)) {
                            done(null, user)
                        } else {
                            done(null, false)
                        }
                    } else {
                        done(null, false)
                    }
                })
        } catch (error) {
            console.log(error + "--------- this is the error");
            done(error)
        }
    }

))