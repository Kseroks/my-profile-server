const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const DescriptionApi = require("./routes/api-me-routers");
const LinkApi = require("./routes/api-links-routers");
const cors = require("cors");

const errorMsg = chalk.bgKeyword("red").redBright;
const successMsg = chalk.bgKeyword("green").white;

const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(successMsg("Connected to DB")))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(errorMsg(`listening port ${process.env.PORT}`));
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(DescriptionApi);
app.use(LinkApi);
