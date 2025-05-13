# 📝 Task Management App

This is a dynamic **Task Management App** built with HTML, Tailwind CSS, and vanilla JavaScript. It allows users to add, manage, and filter tasks, each with a name, category, deadline, and status. The app automatically tracks overdue tasks and uses local storage to persist data across sessions.

---

## 🚀 Features

- **Add Tasks**: Users can input a task name, category, deadline, and initial status.
- **View Task List**: Tasks are displayed with their details, and the list updates in real-time.
- **Update Status**: Tasks can be marked as “In Progress” or “Completed.”
- **Overdue Detection**: Tasks past their deadline are automatically marked as “Overdue.”
- **Filtering**: Tasks can be filtered by status or category.
- **Local Storage**: Task data is saved to and loaded from the browser's local storage.

---

## 📂 Project Structure

```
.
├── index.html
├── script.js
├── README.md
```

---

## 🔧 How It Works

1. **Adding Tasks**: Fill in the task fields and click "Add Task" to add it to the list.
2. **Updating Status**: Use the dropdown in each task card to change its status.
3. **Filtering**: Use the dropdown and input field above the list to filter tasks by status or category.
4. **Persistence**: Refresh the page, and tasks will be restored from local storage.

---

## ✅ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   ```
2. Open `index.html` in your browser to start using the app.

---

## 💡 Future Improvements

- Add delete functionality for tasks
- Implement category/tag suggestions
- Improve mobile responsiveness and accessibility
- Add task priority levels

---

## 🧠 Reflection

### Challenges Faced

One of the main challenges was implementing automatic overdue detection without requiring user interaction. Managing real-time filtering combined with status updates also required careful DOM manipulation and re-rendering logic.

### Solutions

I used JavaScript's `Date` object and local comparisons to determine overdue status. To keep the UI consistent, I built a centralized `renderTasks()` function to handle all display logic based on the current state.

### Improvements

I would implement additional features like task deletion, custom priority levels, and enhanced accessibility for screen readers. I would also consider using a frontend framework like React to scale the application more easily.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

