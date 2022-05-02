const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.get("/", (req, res) => {
  Entry.find({}, (err, post) => {
    res.render("home", {
      posts: post
    });
  });

});

module.exports = router;
