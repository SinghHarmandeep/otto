import * as express from "express";

import User from '../models/Users';

const routers = express.Router();

routers.post('/signup', (req, res) => {
    console.log(req.body);

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                console.log(user);
                res.json({ email: 'An account already exists with this email' });
            } else {
                const newUser = new User({
                    handle: req.body.username,
                    email: req.body.email,
                    password: req.body.pass,
                    phone: parseInt(req.body.phone)
                })
                newUser.save()
                    .then((_err) => {
                        console.log(_err + 'err');
                        res.send(_err)
                    }).catch(dd => {
                        console.log(dd + "im not sure what");
                        res.send(dd)
                        
                    })
            }

        }
        )

})

export default routers;