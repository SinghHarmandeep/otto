import passport from 'passport';
import passportLocal from 'passport-local';

import Users from '../models/Users'

passport.use(new passportLocal.Strategy(
    {
        usernameField: 'email'
    },
    async (email, pass, done) => {
        try {
            Users.findOne({ email })
                .then(user => {
                    if (user) {
                        
                    }
                })

        } catch (error) {
            done(error)
        }
    }

))