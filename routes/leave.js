const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const data = [];

router.get("/leave-message", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "leave.html"));
});

router.post("/message", (req, res, next) => {
  const filePath = path.join(__dirname, "../message.txt");
  // const message = req.body.message;

  let messageEntry = {
    message: req.body.message,
  };
  data.push(messageEntry);

  fs.writeFile(filePath, JSON.stringify(data), () => {
    res.status(302).redirect("/");
  });

  // try {
  //   if (fs.existsSync(filePath)) {
  //     fs.appendFile("message.txt", JSON.stringify(message), (err) => {
  //       if (err) throw err;
  //       return res.status(302).redirect("/");
  //     });
  //   } else {
  //     fs.writeFile("message.txt", JSON.stringify(message), (err) => {
  //       if (err) throw err;
  //       return res.status(302).redirect("/");
  //     });
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
});

module.exports = router;
