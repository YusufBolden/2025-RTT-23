function TaskItem({ task, onStatusChange, onDelete }) {
 
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        Priority: <span>{task.priority}</span>
      </p>
      <p>Due: {task.dueDate}</p>
      <label>
        Status:
        <select
          value={task.status}
          onChange={e => onStatusChange(task.id, e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem
