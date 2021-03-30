import * as express from "express";
import * as path from 'path';

const routers = express.Router();

routers.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname,'../public/index.html'))
})


export default routers;