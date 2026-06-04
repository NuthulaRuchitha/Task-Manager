import { useEffect, useState } from "react";
import api from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    const response = await api.get("/");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks
  .filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  })
  .filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      <TaskForm refresh={fetchTasks} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <h3>
        Active: {tasks.filter(t => !t.completed).length}
        {" | "}
        Completed: {tasks.filter(t => t.completed).length}
      </h3>

      <input
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TaskList
        tasks={filteredTasks}
        refresh={fetchTasks}
      />
    </div>
  );
}

export default App;