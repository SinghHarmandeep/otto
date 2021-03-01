import * as express from "express"; //stick with this syntex, as specified in the cofig files
import * as cors from "cors";
import * as bodyParser from 'body-parser';

import Routers from './routers';

let app = express();
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(express.static('public'));
app.use(Routers);
app.use(express.json())


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})