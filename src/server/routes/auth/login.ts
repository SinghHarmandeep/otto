import * as express from "express";
import * as bcrypt from 'bcryptjs';

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
                            return res.json({msg: 'Login Success'})
                        }else{
                            return res.status(400).json({msg: 'Invalid credintials pass'})
                        }
                    })
            } else {
                return res.status(400).json({ msg: 'no account with this email' })
            }
        }, (err) => {
            throw err;
        })
})

export default routers;