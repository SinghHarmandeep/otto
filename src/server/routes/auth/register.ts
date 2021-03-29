import * as express from "express";
import * as bcrypt from 'bcryptjs';

import User from '../../models/Users';

const routers = express.Router();

routers.post('/signup', (req, res) => {

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.json({ email: `An account already exists with email: ${req.body.email}` });
            } else {

                const newUser = new User({
                    handle: req.body.username,
                    email: req.body.email,
                    password: req.body.pass,
                    phone: parseInt(req.body.phone)
                })
                
                bcrypt.genSalt(11, (err, salt) => {
                    bcrypt.hash(req.body.pass, salt, (_err, hash) => {
                        if (_err) throw _err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json({ status: 'user created', user }))
                            .catch(err => res.send(err))
                    })
                })
            }
        }
        )
})

export default routers;