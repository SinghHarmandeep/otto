import * as express from "express";
import * as path from 'path';

const routers = express.Router();


routers.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

routers.post('/gobi', (req, res, next) => {
    res.json(`going Places`)
})

export default routers;