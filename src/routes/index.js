const express = require("express");

const toDoRouter = require("./todo");
const signupRouter = require("./signup");
const loginRouter = require("./login");
const uploadFileRouter = require("./file");

const router = express.Router();

router.use("/todo", toDoRouter);
router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/file", uploadFileRouter);

module.exports = router;