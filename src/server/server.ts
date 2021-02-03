import * as express from "express";
import * as path from 'path';
// import Routers from './routers';


let app = express();

app.use(express.static('public'));
// app.use(Routers);
app.use(express.json())

app.get('*', (req, res) => {



    res.sendFile(path.join(__dirname,'../public/index.html'))

})

app.listen(3000, () => {
    console.log(`listening at port 3000`);
})