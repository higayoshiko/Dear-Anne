const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.get("/:postId", (req, res) => {
  const currentPostId = req.params.postId;

  Entry.findOne({_id: currentPostId}, (err, post) => {
    res.render("posts", {
      title: post.title,
      content: post.content
    });
  });
});

module.exports = router;
