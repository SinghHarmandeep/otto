
import { Router } from "express";
import { authenticate } from "passport";

import { createToken, Ipayload } from '../../utils/tokens';

const routers = Router();

routers.post('/login', (req, res, next) => {

    authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            return res.json({ msg: 'Invalid email or password' })
        }
        req.logIn(user, function (err) {

            if (err) { return next(err); }
            // jwt init
            const payload: Ipayload = {
                handle: user.handle,
                email: user.email,
                id: user.id
            }
            let token = createToken(payload)

            res.json({success: true, token: `Bearer ${token}`})
            // 
            // return res.redirect('/' + user.handle);
        });
    })(req, res, next)

})


export default routers;