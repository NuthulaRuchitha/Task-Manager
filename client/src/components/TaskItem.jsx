import api from "../api";

function TaskItem({ task, refresh }) {

  const toggleTask = async () => {
    await api.patch(`/${task.id}/toggle`);
    refresh();
  };

  const editTask = async () => {
    const newTitle = prompt(
      "Enter Title",
      task.title
    );

    if (!newTitle) return;

    const newDescription = prompt(
      "Enter Description",
      task.description || ""
    );

    const newDueDate = prompt(
      "Enter Due Date (YYYY-MM-DD)",
      task.dueDate || ""
    );

    await api.put(`/${task.id}`, {
      ...task,
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate
    });

    refresh();
  };

  const deleteTask = async () => {
    const confirmed = window.confirm(
      "Delete this task?"
    );

    if (!confirmed) return;

    await api.delete(`/${task.id}`);
    refresh();
  };

  const overdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    !task.completed;

  return (
    <div
      style={{
        border: overdue
          ? "2px solid red"
          : "1px solid #ccc",
        padding: "15px",
        marginTop: "10px",
        borderRadius: "8px"
      }}
    >
      <h3>
        {task.completed ? "✅" : "⬜"} {task.title}
      </h3>

      <p>
        <strong>Description:</strong>{" "}
        {task.description || "No Description"}
      </p>

      <p>
        <strong>Due Date:</strong>{" "}
        {task.dueDate || "Not Set"}
      </p>

      {overdue && (
        <p style={{ color: "red" }}>
          Overdue Task
        </p>
      )}

      <button onClick={toggleTask}>
        Toggle Status
      </button>

      <button
        onClick={editTask}
        style={{ marginLeft: "10px" }}
      >
        Edit
      </button>

      <button
        onClick={deleteTask}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;