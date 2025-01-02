// document.addEventListener("DOMContentLoaded", () => {
//   const widget = document.getElementById("widget");
//   const taskList = document.getElementById("task-list");
//   const taskInput = document.getElementById("task-input");
//   const addTaskButton = document.getElementById("add-task");

//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   let isDragging = false;
//   let offsetX = 0;
//   let offsetY = 0;

//   // Render the tasks
//   const renderTasks = () => {
//     taskList.innerHTML = ""; // Clear the task list
//     tasks.forEach((task, index) => {
//       const li = document.createElement("li");
//       li.className = `task-item ${task.completed ? "completed" : ""}`;
//       li.innerHTML = `
//         <label>
//           <input type="checkbox" ${task.completed ? "checked" : ""} />
//           <span>${task.text}</span>
//         </label>
//         <button class="delete-task" data-index="${index}">❌</button> <!-- Delete Button -->
//       `;
//       // Toggle task completion on checkbox click
//       li.querySelector("input[type='checkbox']").addEventListener("click", () => toggleTask(index));
//       // Delete task on delete button click
//       li.querySelector(".delete-task").addEventListener("click", () => deleteTask(index));
//       taskList.appendChild(li);
//     });
//   };

//   // Add a new task
//   const addTask = () => {
//     const taskText = taskInput.value.trim();
//     if (taskText) {
//       tasks.push({ text: taskText, completed: false });
//       taskInput.value = ""; // Clear input field
//       saveTasks();
//     }
//   };

//   // Toggle task completion
//   const toggleTask = (index) => {
//     tasks[index].completed = !tasks[index].completed;
//     saveTasks();
//   };

//   // Delete a task
//   const deleteTask = (index) => {
//     tasks.splice(index, 1); // Remove task from array
//     saveTasks();
//   };

//   // Save tasks to localStorage
//   const saveTasks = () => {
//     localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks
//     renderTasks(); // Re-render tasks
//   };

//   // Dragging functionality for the widget
//   widget.addEventListener("mousedown", (e) => {
//     isDragging = true;
//     offsetX = e.clientX - widget.offsetLeft;
//     offsetY = e.clientY - widget.offsetTop;
//     widget.style.cursor = "grabbing";
//   });

//   document.addEventListener("mousemove", (e) => {
//     if (isDragging) {
//       const newX = e.clientX - offsetX;
//       const newY = e.clientY - offsetY;
//       widget.style.left = `${newX}px`;
//       widget.style.top = `${newY}px`;
//       widget.style.right = "auto"; // Remove right positioning for proper dragging
//     }
//   });

//   document.addEventListener("mouseup", () => {
//     isDragging = false;
//     widget.style.cursor = "grab";
//   });

//   // Add task event
//   addTaskButton.addEventListener("click", addTask);

//   // Initial render of tasks
//   renderTasks();
// });


document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("widget");
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Render the tasks
  const renderTasks = () => {
    taskList.innerHTML = ""; // Clear the task list
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = `task-item ${task.completed ? "completed" : ""}`;
      li.innerHTML = `
        <label>
          <input type="checkbox" ${task.completed ? "checked" : ""} />
          <span>${task.text}</span>
        </label>
        <button class="delete-task" data-index="${index}">❌</button>
      `;
      // Toggle task completion on checkbox click
      li.querySelector("input[type='checkbox']").addEventListener("click", () => toggleTask(index));
      // Delete task on delete button click
      li.querySelector(".delete-task").addEventListener("click", () => deleteTask(index));
      taskList.appendChild(li);
    });

    // Adjust widget height dynamically
    adjustWidgetHeight();
  };

  // Add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      taskInput.value = ""; // Clear input field
      saveTasks();
    } else {
      alert("Task cannot be empty!"); // Error handling for empty input
    }
  };

  // Toggle task completion
  const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
  };

  // Delete a task
  const deleteTask = (index) => {
    tasks.splice(index, 1); // Remove task from array
    saveTasks();
  };

  // Save tasks to localStorage
  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks
    renderTasks(); // Re-render tasks
  };

  // Adjust the widget height dynamically based on content
  const adjustWidgetHeight = () => {
    const baseHeight = 150; // Base height including input and title
    const taskListHeight = taskList.scrollHeight;
    widget.style.height = `${Math.min(600, baseHeight + taskListHeight)}px`; // Cap the max height at 600px
  };

  // Dragging functionality for the widget
  widget.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - widget.offsetLeft;
    offsetY = e.clientY - widget.offsetTop;
    widget.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      widget.style.left = `${newX}px`;
      widget.style.top = `${newY}px`;
      widget.style.right = "auto"; // Remove right positioning for proper dragging
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    widget.style.cursor = "grab";
  });

  // Add task event
  addTaskButton.addEventListener("click", addTask);

  // Handle "Enter" key for adding tasks
  taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // Initial render of tasks
  renderTasks();
});

