import { useState } from "react";
import api from "../api";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/", {
      title,
      description,
      dueDate
    });

    setTitle("");
    setDescription("");
    setDueDate("");

    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;