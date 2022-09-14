import express from "express";
import { connectDb } from "./db";
import routes from "./routes";
import bodyParser from 'body-parser';
var cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors())

app.get("/", function (req, res) {
res.send("Hello World");
});

app.use(routes)

connectDb().then(async () => {
    app.listen(3001, () => console.log("Listening on http://localhost:3001"));
});
