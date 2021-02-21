import * as express from "express";
import * as path from 'path';

const routers = express.Router();

routers.post('/gobi/:in?', (req, res) => {
    
    console.log(req.params.in);

    if (req.params.in) {
        res.json(`going Places ${req.params.in}`)
    }
    res.send('enter correct params')
})

routers.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


export default routers;