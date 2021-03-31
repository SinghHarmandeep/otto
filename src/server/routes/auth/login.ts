import * as jwt from "jsonwebtoken";

import { Router, Request } from "express";
import { authenticate } from "passport";

import config from '../../config';

const routers = Router();



routers.post('/login', (req, res, next) => {

    authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { 
            return res.json({msg: 'Invalid email or password'})
        }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            // jwt init
            const payload: Ipayload = {
                handle: user.handle,
                email: user.email,
                id: user._id
            }
            jwt.sign(
                payload,
                config.auth.secret,
                { expiresIn: '2 days' },
                (err, token) => {
                    return res.json({
                        success: true,
                        token: `Bearer ${token}`
                    })
                })
            // return res.redirect('/' + user.handle);
        });
    })(req, res, next)

})

export interface reqUser extends Request {

}
export interface Ipayload {
    handle: string,
    email: string,
    id: string,
}

export default routers;
