import * as express from "express";

import { createToken, Ipayload } from '../../utils/tokens';
import { generateHash } from '../../utils/passwords';

import User from '../../models/Users';

const routers = express.Router();

routers.post('/signup', (req, res) => {

    // console.log(req.body);

    try {

        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    // console.log('user exists' + user);
                    res.json({ msg: `${req.body.email} already registered!` });
                } else {
                    if (!req.body.pass) {
                        // console.log('bad password');
                        return res.status(400).json('no password entered')
                    }
                    // console.log('we creating a user info');
                    
                    const newUser = new User({
                        handle: req.body.username,
                        email: req.body.email,
                        password: req.body.pass,
                        phone: parseInt(req.body.phone)
                    })

                    newUser.password = generateHash(req.body.pass)

                    // console.log('adding hash passs')
                    newUser.save()
                        .then(user => {
                            console.log('saved to db')
                            // jwt payload
                            const payload: Ipayload = {
                                handle: newUser.handle,
                                email: newUser.email,
                                id: newUser.id
                            }
                            let token = createToken(payload)
                            // console.log('we goood sending it back to u');
                            
                            res.json({
                                msg: 'user created',
                                token: `Bearer ${token}`
                            })
                        }).catch(err => res.send(err))
                }
            })

    } catch (error) {
        console.log(error);

    }

})

export default routers;