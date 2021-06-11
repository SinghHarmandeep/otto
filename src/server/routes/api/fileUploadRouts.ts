import * as express from 'express';
import { authenticate } from 'passport'

const route = express.Router();

//to upload file/object to s3 & store fileInfo in DB
route.put('/upload', authenticate('jwt'), (req, res, next) => {
  console.log(req.body);
  res.sendStatus(203)
})

//to read the file from s3
route.get('/:id', authenticate('jwt'), (req, res) => {
  console.log(req.params);

  res.sendStatus(203);
})

//get file path from mongoDB delete it, then use the path to delete in s3
route.delete('/:id', authenticate('jwt'), (req, res) =>{
  console.log(req.params);

  res.sendStatus(202);
})

export default route;