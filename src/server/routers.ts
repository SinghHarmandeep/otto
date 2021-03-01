import * as express from "express";
import * as path from 'path';

const routers = express.Router();

routers.post('/findride', (req, res) => {
    let order = req.body;

    
    res.send(200);
})

routers.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


export default routers;