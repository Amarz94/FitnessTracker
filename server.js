const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("dev"));

mongoose.connect("mongodb://localhost/exercise");

app.use(require("./routes/api"))
app.use(require("./routes/html"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});