import * as express from "express";
import * as path from 'path';
import User from './models/Users';

const routers = express.Router();

routers.post('/findride', (req, res) => {
    let order = req.body;
    
    res.send(200);
})

routers.post('/login', (req,res) => {
    let credt = req.body;
    // res.send(200).json(credt)
    console.log(credt);
    
    res.json(credt)
})

routers.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname,'../public/index.html'))
})


export default routers;