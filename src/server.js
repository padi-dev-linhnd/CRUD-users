import express from "express";
import bodyParser from "body-parser";
import viewEngine from "../src/config/viewEngine";
// import initWebRoutes from "../src/route/web";
import initAPIRoutes from "../src/route/API";
import connectDB from "./config/connectDB";

require("dotenv").config();

const port = process.env.PORT || 8888;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
// initWebRoutes(app);
initAPIRoutes(app);

connectDB();

app.listen(port, function () {
  console.log(`please click http://localhost:${port}`);
});
