import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import config from './src/config/app'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Node Babel");
});

app.listen(config.app.port, () => {
  console.log(`app is listening to port ${config.app.port}`);
});
