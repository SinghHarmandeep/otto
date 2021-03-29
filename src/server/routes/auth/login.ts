import * as express from "express";
import * as bcrypt from 'bcryptjs';

import User from '../../models/Users';

const routers = express.Router();

routers.post('/login', (req, res) => {
    const info = req.body;
    User.findOne({ email: info.email }).
        then((user) => {
            if (user) {
                return res.send({ user, msg: 'account exists with this email' })
            }else{
                res.send({msg: 'no account with this email'})
            }
        }, (err) => {
            throw err;
        })
})

export default routers;