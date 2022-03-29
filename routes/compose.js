const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.get("/", (req, res) => {
  res.render("compose")
});

router.post("/", (req, res) => {

  const entry = new Entry({
    title: req.body.title,
    content: req.body.content
  });

  entry.save(err => {
    if(!err){
      res.redirect("/");
    }
  });
});

module.exports = router;
