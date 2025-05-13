const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
function updateCounter() {
  taskCounter.textContent = taskList.children.length;
}
function addTask() {
  const taskDescription = taskInput.value.trim();
  if (taskDescription === "") return;
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-2";
  const span = document.createElement("span");
  span.textContent = taskDescription;
  span.className = "cursor-pointer hover:line-through";
  span.addEventListener("click", () => {
    const completedSpan = document.createElement("span");
    completedSpan.textContent = "Completed!";
    completedSpan.className = "text-green-600 font-semibold";
    span.replaceWith(completedSpan);
  });
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className =
    "text-sm bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200";
  removeBtn.addEventListener("click", () => {
    li.remove();
    updateCounter();
  });
  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  updateCounter();
}
addTaskBtn.addEventListener("click", addTask);
// Pressing Enter also adds task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
