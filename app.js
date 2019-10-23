// var createError = require('http-errors');
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// plugin
const expressJoiValidation = require("express-joi-validation");
const attachResponse = require("./plugin/attachResponse");

// Include router

const routerSetup = require("./routes/index");
const allController = require("./controller");

const app = express();

const validator = expressJoiValidation.createValidator({
  passError: true
});

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// i18n
require("./plugin/i18n")(app, __dirname);

// attach response in res object
app.use((req, res, next) => {
  attachResponse(res);
  next();
});

// router setup
routerSetup(app, allController, validator);

// catch 404 and forward to error handler
app.use((err, req, res) => {
  if (err && err.error && err.error.isJoi) {
    return res.invalidInput(err.error.toString());
  }
  return res._500(err.message, err);
});

// error handler
// app.use((err, req, res) => {
//   res._500(err.message, err);
// });

// esbenp.prettier-vscode
// "[javascript]": {
//   "editor.formatOnSave": true
// },

process.on("uncaughtException", err => {
  console.log("uncaughtException", err);
});

module.exports = app;
