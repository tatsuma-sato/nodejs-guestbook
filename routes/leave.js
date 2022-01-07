const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/leave-message", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "leave.html"));
});

router.post("/message", (req, res, next) => {
  const data = [];
  const filePath = path.join(__dirname, "../message.txt");
  console.log(req.body);

  data.push(req.body.message);
  try {
    if (fs.existsSync(filePath)) {
      fs.appendFile("message.txt", `\n${JSON.stringify(data)}`, (err) => {
        if (err) throw err;
        return res.status(302).redirect("/");
      });
    } else {
      fs.writeFile("message.txt", JSON.stringify(data), (err) => {
        if (err) throw err;
        return res.status(302).redirect("/");
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
