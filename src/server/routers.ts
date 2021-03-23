import * as express from "express";
import * as path from 'path';
import mongoose from 'mongoose';
import User from './models/Users';

const routers = express.Router();

routers.post('/findride', (req, res) => {
    let order = req.body;

    
    res.send(200);
})

routers.get('/*', (req, res) => {
    const user = new User(
        {
            handle: 'gobi',
            email: 'gobi@test.com',
            password: `testpass`
        }
    )
    // user.save();
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


export default routers;