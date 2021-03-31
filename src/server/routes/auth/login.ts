import * as jwt from "jsonwebtoken";

import { Router } from "express";
import { authenticate } from "passport";
import { compareHash } from "../../utils/passwords";

import config from '../../config';
import User from '../../models/Users';

const routers = Router();

routers.post('/login', authenticate('local'), (req, res) => {
    console.log('authenticated after the middleware');
    console.log(req.user);
    res.send(req.user);
    // const info = req.body;
    // User.findOne({ email: info.email }).
    //     then((user) => {
    //         if (user) {
    //             let match = compareHash(info.pass, user.password)
    //             if (match) {
    //                 //jwt init
    //                 const payload: Ipayload = {
    //                     handle: user.handle,
    //                     email: user.email,
    //                     id: user._id
    //                 }
    //                 jwt.sign(
    //                     payload,
    //                     config.auth.secret,
    //                     { expiresIn: '2 days' },
    //                     (err, token) => {
    //                         return res.json({
    //                             success: true,
    //                             token: `Bearer ${token}`
    //                         })
    //                     })

    //                 // return res.json({ msg: 'Login Success' })
    //             } else {
    //                 return res.status(400).json({ msg: 'Invalid credintials' })
    //             }
    //         } else {
    //             return res.status(400).json({ msg: 'no account with this email' })
    //         }
    //     }, (err) => {
    //         throw err;
    //     })
})

export interface Ipayload {
    handle: string,
    email: string,
    id: string,
}

export default routers;