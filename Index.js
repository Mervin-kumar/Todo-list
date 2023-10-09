// Step 1: Create variables to store the references to HTML elements and an array to store the tasks.
let input = document.getElementById('input');
let addButton = document.getElementById('add');
let todolist = document.getElementById('todolist');
let tasks = [];

// Step 2: Create a Function to Add Tasks
// 2.1: Function Declaration
function addTask() {
  // 2.2: Store input value in text
  const text = input.value.trim();

  // 2.3: Check for Empty Input
  if (text !== "") {
    // Add Task to the Array
    tasks.push(text);

    // Clear Input Field
    input.value = "";

    // Render Tasks
    renderTasks();
  }
}

// Setp 3: Add a click event listener to the addButton
addButton.addEventListener("click", addTask);

// 3.1: Create a Function to Render Tasks
function renderTasks() {
  // Set the HTML content of the todolist element
  todolist.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    // Remove button
    taskItem.innerHTML = `${task} <button onclick="removeTask(${index})">Remove</button>`;
    todolist.appendChild(taskItem);
  });
}

// step 4 : Create a Function to Remove Tasks
function removeTask(index) {
  // Remove the task from the array at the specified index
  tasks.splice(index, 1);

  // Render Tasks
  renderTasks();
}
