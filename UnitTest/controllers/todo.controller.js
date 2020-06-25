const TodoModel= require("../model/todo.model");
const mongodb = require('../mongodb/mongodb.connect');

exports.createTodo = async (req, res, next) => {
    try {
        await mongodb.connect();
        const createModel = await TodoModel.create(req);
        res.status(201).json(createModel);
    } catch (e) {
        next(e);
    }
};

exports.getTodos = async (req, res, next) => {
    //await mongodb.connect();
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
};
