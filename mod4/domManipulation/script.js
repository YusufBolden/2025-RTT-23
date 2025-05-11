let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let listItem = document.createElement("li");
  listItem.innerText = taskText;

  // Add click event to handle flashing and crossing off
  listItem.addEventListener("click", function () {
    if (listItem.classList.contains("crossed")) return; // prevent re-clicking

    listItem.classList.add("flashing");

    // After animation ends, add the crossed class
    listItem.addEventListener(
      "animationend",
      function () {
        listItem.classList.remove("flashing");
        listItem.classList.add("crossed");
      },
      { once: true }
    );
  });

  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});
