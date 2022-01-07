const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/read-message", (req, res, next) => {
  fs.readFile(path.join(__dirname, "../message.txt"), "utf8", (err, data) => {
    let messages = [];
    if (!err) {
      try {
        messages = JSON.parse(data);
      } catch (error) {
        res.send("file does not exist...\nPlease neave a message first");
      }
    }
    data = messages;

    res.render("read", { messages });
  });
});

module.exports = router;
