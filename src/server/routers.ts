import * as express from "express";

const routers = express.Router();


routers.post('/gobi', (req, res, next) => {
    res.json(`going Places`)
})

export default routers;