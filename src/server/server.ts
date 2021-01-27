import * as express from "express";



let app = express();

app.use(express.json())

app.use(express.static('public'));

app.listen(3000, () => {
    console.log(`listening at port 3000`);
})