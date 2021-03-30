import * as express from "express";
import * as bcrypt from 'bcryptjs';
import * as jwt from "jsonwebtoken";

import config from '../../config';

import User from '../../models/Users';

const routers = express.Router();

routers.post('/login', (req, res) => {
    const info = req.body;
    User.findOne({ email: info.email }).
        then((user) => {
            if (user) {
                bcrypt.compare(info.pass, user.password)
                    .then((match) => {
                        if (match) {
                            //jwt init
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

                            // return res.json({ msg: 'Login Success' })
                        } else {
                            return res.status(400).json({ msg: 'Invalid credintials pass' })
                        }
                    })
            } else {
                return res.status(400).json({ msg: 'no account with this email' })
            }
        }, (err) => {
            throw err;
        })
})

export interface Ipayload {
    handle: string,
    email: string,
    id: string,
}

export default routers;