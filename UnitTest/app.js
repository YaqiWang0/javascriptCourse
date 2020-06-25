const express = require('express');
const todoRoutes = require('./routes/todo.routes');


const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({message: error.message});
});

app.get("/", (req, res) => {
  res.json("Hello world");
});

// app.listen(3000, () => {
//   console.log("server is now running");
// });

module.exports = app;

