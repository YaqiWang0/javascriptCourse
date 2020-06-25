const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();

router.post("/", (req, res, next) => todoController.createTodo(req.body, res, next));

module.exports = router;