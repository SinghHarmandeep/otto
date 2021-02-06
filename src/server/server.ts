import * as express from "express"; //stick with this syntex, as specified in the cofig files

import Routers from './routers';

let app = express();

app.use(express.static('public'));
app.use(Routers);
app.use(express.json())



app.listen(3000, () => {
    console.log(`listening at port 3000`);
})