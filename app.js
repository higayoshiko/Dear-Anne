const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/dearAnneDB", {useNewUrlParser: true, useUnifiedTopology: true});

// create routes
const homeRoute = require("./routes/home");
app.use("/", homeRoute);
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);
const composeRoute = require("./routes/compose");
app.use("/compose", composeRoute);
const settingsRoute = require("./routes/settings");
app.use("/settings", settingsRoute);
const recentRoute = require("./routes/recent");
app.use("/partials/recent", recentRoute);
// const sideProfile = require("./routes/home");
// app.use("/partials/side-profile", sideProfile);


app.listen(port, () => {
  console.log("Connected to port 3000");
});
