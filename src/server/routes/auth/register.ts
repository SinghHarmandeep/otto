import * as express from "express";

import { createToken, Ipayload } from '../../utils/tokens';
import { generateHash } from '../../utils/passwords';

import User from '../../models/Users';

const routers = express.Router();

routers.post('/signup', (req, res) => {

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.status(404).json({ msg: `${req.body.email} already registered!` });
            } else {
                if (!req.body.pass) {
                    return res.status(400).json('no password entered')
                }
                const newUser = new User({
                    handle: req.body.username,
                    email: req.body.email,
                    password: req.body.pass,
                    phone: parseInt(req.body.phone)
                })

                newUser.password = generateHash(req.body.pass)

                newUser.save()
                    .then(user => {
                        // jwt payload
                        const payload: Ipayload = {
                            handle: newUser.handle,
                            email: newUser.email,
                            id: newUser.id
                        }
                        let token = createToken(payload)
                        res.json({
                            msg: 'user created',
                            token
                        })
                    }).catch(err => res.send(err))
            }
        })
})

export default routers;