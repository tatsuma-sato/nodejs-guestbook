const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home");
const readRouter = require("./routes/read");
const leaveRouter = require("./routes/leave");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);
app.use(readRouter);
app.use(leaveRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8000, () => {
  console.log(`server is runnning`);
});
