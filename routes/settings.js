const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
const router = express.Router();
const Info = require("../models/Info");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads")
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now())
//   }
// });
//
// const upload = multer({storage: storage});

router.get("/", (req, res) => {
  Info.find({}, (err, post) => {
    if(err){
      console.log(err)
    }else{
      res.render("settings")
    }
  });
});

router.post("/", (req, res) => {
  console.log(req.body.nickname)

  const info = new Info({
      nickname: req.body.nickname,
      aboutMe: req.body.aboutMe
    });

    info.save(err => {
      if(!err){
        res.redirect("/");
      }
    });
});


module.exports = router;

// img: {
//   data: fs.readFileSync(path.join(__dirname, "/uploads/", req.file)),
//   contentType: "image/png"
// }
