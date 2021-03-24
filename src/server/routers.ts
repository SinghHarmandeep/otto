import * as express from "express";
import * as path from 'path';
import mongoose from 'mongoose';
import User from './models/Users';

const routers = express.Router();

routers.post('/findride', (req, res) => {
    let order = req.body;
    
    res.send(200).json(order);
})

routers.get('/*', (req, res) => {
    
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


export default routers;