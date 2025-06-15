import TaskItem from "../TaskItem/TaskItem"

function TaskList({ tasks, onStatusChange, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks match your filter.</p>
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList
