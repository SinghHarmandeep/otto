import * as express from "express"; //stick with this syntex, as specified in the cofig files
import * as cors from "cors";
import * as mongoose from 'mongoose';
import config from './config';
import Routers from './routes';

import { configurePassport } from './middlewares/passport-strategy'

let app = express();

configurePassport(app);

app.use(cors())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(Routers);

mongoose.connect(config.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('successfully connected to the DB'))
    .catch(err => console.log(`error message ${err}`));


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})