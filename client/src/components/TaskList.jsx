import TaskItem from "./TaskItem";

function TaskList({ tasks, refresh }) {

  if (tasks.length === 0) {
    return <h3>No Tasks Found</h3>;
  }

  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          refresh={refresh}
        />
      ))}
    </>
  );
}

export default TaskList;