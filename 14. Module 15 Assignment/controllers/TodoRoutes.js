const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  getOneTodo,
  updateOneTodo,
  deleteOneTodo,
} = require("../services/TodoService");

router.post("/todos", async (req, res) => {
  await createTodo(req, res);
});

router.get("/todos", async (req, res) => {
  await getAllTodos(req, res);
});

router.get("/todos/:id", async (req, res) => {
  await getOneTodo(req, res);
});

router.put("/todos/:id", async (req, res) => {
  await updateOneTodo(req, res);
});

router.delete("/todos/:id", async (req, res) => {
  await deleteOneTodo(req, res);
});

module.exports = router;
