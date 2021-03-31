import * as passport from "passport";
import config from '../config';
import * as passportJWT from 'passport-jwt';

const options = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secret,
    // passReqToCallback: true
};

passport.use(new passportJWT.Strategy(
    options,
    (jwt_paylode, done) => {
        try {
            
            done(null, jwt_paylode)
        } catch (error) {

        }
    }))