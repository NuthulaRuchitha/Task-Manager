const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/tasks.json");

const readTasks = () => {
  return JSON.parse(fs.readFileSync(filePath));
};

const saveTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

router.get("/", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

router.post("/", (req, res) => {
  const tasks = readTasks();

  if (
    req.body.dueDate &&
    new Date(req.body.dueDate) < new Date().setHours(0,0,0,0)
    ) {
    return res.status(400).json({
        message: "Past dates are not allowed"
    });
    }

  const newTask = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description || "",
    dueDate: req.body.dueDate || null,
    completed: false,
    createdAt: new Date()
  };

  tasks.unshift(newTask);

  saveTasks(tasks);

  res.status(201).json(newTask);
});

router.put("/:id", (req, res) => {
  const tasks = readTasks();

  const updated = tasks.map(task =>
    task.id === req.params.id
      ? { ...task, ...req.body }
      : task
  );

  saveTasks(updated);

  res.json({ message: "Updated" });
});

router.patch("/:id/toggle", (req, res) => {
  const tasks = readTasks();

  const updated = tasks.map(task =>
    task.id === req.params.id
      ? { ...task, completed: !task.completed }
      : task
  );

  saveTasks(updated);

  res.json({ message: "Toggled" });
});

router.delete("/:id", (req, res) => {
  const tasks = readTasks();

  const filtered = tasks.filter(
    task => task.id !== req.params.id
  );

  saveTasks(filtered);

  res.json({ message: "Deleted" });
});

module.exports = router;