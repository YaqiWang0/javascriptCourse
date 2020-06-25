const TodoController = require("../../controllers/todo.controller");
const TodoModel = require('../../model/todo.model');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mock-data/new-todo');
const allTodos = require('../mock-data/all-todos');

TodoModel.create = jest.fn();
TodoModel.find = jest.fn();

let req, res, next;

beforeEach(() => {
    //will be failed if you dont use mock or spy
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});

describe("TodoController.createTodo", () => {
    beforeEach(() => {
        req = newTodo;
    });
    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function");
    });
    it("should call TodoModel.create",async () => {
        await TodoController.createTodo(req, res, next);
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).not.toHaveBeenCalled()
    });
    it("should return 201 response code", async () => {
        await TodoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("should return json body in response", async () => {
        // toBe is for the same reference
        TodoModel.create.mockReturnValue(newTodo);
        await TodoController.createTodo(req,res,next);
        // for deep equal
        expect(res._getJSONData()).toStrictEqual(newTodo);
    });

    it("should handle error", async () => {
        const errorMessage = { "message": "Done property missing", };
        const rejectedPromise = Promise.reject(errorMessage);
        TodoModel.create.mockReturnValue(rejectedPromise);
        await TodoController.createTodo(req, res, next);
        expect(next).toBeCalledWith(errorMessage);
    })
});

describe("TodoControllers.getTodos", () => {
    it("should have a getTodos function", () => {
        expect(typeof TodoController.getTodos).toBe("function");
    });
    it("it should call TodModel.find({})", async () => {
        await TodoController.getTodos(req, res, next);
        expect(TodoModel.find).toHaveBeenCalledWith({});
    });
    it("it should return response with status 200 and all todos", async () => {
        TodoModel.find.mockReturnValue(allTodos);
        await TodoController.getTodos(req, res, next);
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled).toBeTruthy();
        expect(res._getJSONData).toStrictEqual(allTodos);
    })
    TodoModel.find({});
});

