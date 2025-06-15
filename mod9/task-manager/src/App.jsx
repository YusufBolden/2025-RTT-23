import { useState } from "react"
import TaskList from "./components/TaskList/TaskList"
import TaskFilter from "./components/TaskFilter/TaskFilter"
import { initialTasks } from "./data/tasks"

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filterStatus, setFilterStatus] = useState("")
  const [filterPriority, setFilterPriority] = useState("")

  function changeTaskStatus(taskId, newStatus) {
    const updatedTasks = []
    for (let task of tasks) {
      if (task.id === taskId) {
        updatedTasks.push({ ...task, status: newStatus })
      } else {
        updatedTasks.push(task)
      }
    }
    setTasks(updatedTasks)
  }

  function deleteTask(taskId) {
    const updatedTasks = []
    for (let task of tasks) {
      if (task.id !== taskId) {
        updatedTasks.push(task)
      }
    }
    setTasks(updatedTasks)
  }

  function changeFilters(filters) {
    if ("status" in filters) {
      setFilterStatus(filters.status || "")
    }
    if ("priority" in filters) {
      setFilterPriority(filters.priority || "")
    }
  }

  const shownTasks = []
  for (let task of tasks) {
    const matchesStatus = filterStatus === "" || task.status === filterStatus
    const matchesPriority = filterPriority === "" || task.priority === filterPriority
    if (matchesStatus && matchesPriority) {
      shownTasks.push(task)
    }
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={changeFilters} />
      <TaskList
        tasks={shownTasks}
        onStatusChange={changeTaskStatus}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App
