const express = require("express");
const mongoose = require("mongoose");
const logger = require ("morgan");
const compression =require ("compression");

//express server
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

//Serve static content for the app from the "public" file
app.use (express.static("public"));

//compress all responses
app.use(compression());

app.use(express.urlencoded({exteneded: true}));
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"))

//Start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });