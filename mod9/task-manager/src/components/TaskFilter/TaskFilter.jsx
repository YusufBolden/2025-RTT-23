function TaskFilter({ onFilterChange }) {
  function handleStatus(event) {
    onFilterChange({ status: event.target.value || undefined })
  }

  function handlePriority(e) {
    onFilterChange({ priority: e.target.value || undefined })
  }

  return (
    <div>
      <label>
        Status:
        <select onChange={handleStatus}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select onChange={handlePriority}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  )
}

export default TaskFilter
