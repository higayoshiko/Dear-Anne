const express = require("express");
const router = express.Router();
const Info = require("../models/Info");

router.get("/", (req, res) => {

  Info.find({}, (err, post) => {

      res.render("home", {
        update: post
      });

  });
});

module.exports = router;
