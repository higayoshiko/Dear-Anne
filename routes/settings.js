const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const Info = require("../models/Info");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "profilePics")
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now())
  }
});

const uploadProf = multer({storage: storage});

router.get("/", (req, res) => {
  res.render("settings");
});

router.post("/", uploadProf.single("image"), (req, res) => {
  const img = new Info({
      _id: 1,
      nickname: req.body.nickname,
      aboutMe: req.body.aboutMe,
      img: {
        data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.profileImage)),
        contentType: "image/png"
      }
    });


  Info.save(err => {
    if(!err){
      res.redirect("/");
    }
  });
});


module.exports = router;
