
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
//         <button class="delete-task" data-index="${index}">❌</button>
//       `;
//       // Toggle task completion on checkbox click
//       li.querySelector("input[type='checkbox']").addEventListener("click", () => toggleTask(index));
//       // Delete task on delete button click
//       li.querySelector(".delete-task").addEventListener("click", () => deleteTask(index));
//       taskList.appendChild(li);
//     });

//     // Adjust widget height dynamically
//     adjustWidgetHeight();
//   };

//   // Add a new task
//   const addTask = () => {
//     const taskText = taskInput.value.trim();
//     if (taskText) {
//       tasks.push({ text: taskText, completed: false });
//       taskInput.value = ""; // Clear input field
//       saveTasks();
//     } else {
//       alert("Task cannot be empty!"); // Error handling for empty input
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

//   // Adjust the widget height dynamically based on content
//   const adjustWidgetHeight = () => {
//     const baseHeight = 150; // Base height including input and title
//     const taskListHeight = taskList.scrollHeight;
//     widget.style.height = `${Math.min(600, baseHeight + taskListHeight)}px`; // Cap the max height at 600px
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

//   // Handle "Enter" key for adding tasks
//   taskInput.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//       addTask();
//     }
//   });

//   // Initial render of tasks
//   renderTasks();
// });



// // document.addEventListener("DOMContentLoaded", () => {
// //   const widget = document.getElementById("widget");
// //   const taskList = document.getElementById("task-list");
// //   const taskInput = document.getElementById("task-input");
// //   const addTaskButton = document.getElementById("add-task");

// //   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// //   let isDragging = false;
// //   let offsetX = 0;
// //   let offsetY = 0;

// //   // Render the tasks
// //   const renderTasks = () => {
// //     taskList.innerHTML = ""; // Clear the task list
// //     tasks.forEach((task, index) => {
// //       const li = document.createElement("li");
// //       li.className = `task-item ${task.completed ? "completed" : ""}`;
// //       li.innerHTML = `
// //         <label>
// //           <input type="checkbox" ${task.completed ? "checked" : ""} />
// //           <span>${task.text}</span>
// //         </label>
// //         <button class="delete-task" data-index="${index}">❌</button>
// //       `;
// //       // Toggle task completion on checkbox click
// //       li.querySelector("input[type='checkbox']").addEventListener("click", () => toggleTask(index));
// //       // Delete task on delete button click
// //       li.querySelector(".delete-task").addEventListener("click", () => deleteTask(index));
// //       taskList.appendChild(li);
// //     });

// //     // Adjust widget height dynamically
// //     adjustWidgetHeight();
// //   };

// //   // Add a new task
// //   const addTask = () => {
// //     const taskText = taskInput.value.trim();
// //     if (taskText) {
// //       tasks.push({ text: taskText, completed: false });
// //       taskInput.value = ""; // Clear input field
// //       saveTasks();
// //     } else {
// //       alert("Task cannot be empty!"); // Error handling for empty input
// //     }
// //   };

// //   // Toggle task completion
// //   const toggleTask = (index) => {
// //     tasks[index].completed = !tasks[index].completed;
// //     saveTasks();
// //   };

// //   // Delete a task
// //   const deleteTask = (index) => {
// //     tasks.splice(index, 1); // Remove task from array
// //     saveTasks();
// //   };

// //   // Save tasks to localStorage
// //   const saveTasks = () => {
// //     localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks
// //     renderTasks(); // Re-render tasks
// //   };

// //   // Adjust the widget height dynamically based on content
// //   const adjustWidgetHeight = () => {
// //     const baseHeight = 150; // Base height including input and title
// //     const taskListHeight = taskList.scrollHeight;
// //     widget.style.height = `${Math.min(600, baseHeight + taskListHeight)}px`; // Cap the max height at 600px
// //   };

// //   // Dragging functionality for the widget
// //   widget.addEventListener("mousedown", (e) => {
// //     isDragging = true;
// //     offsetX = e.clientX - widget.offsetLeft;
// //     offsetY = e.clientY - widget.offsetTop;
// //     widget.style.cursor = "grabbing";
// //   });

// //   document.addEventListener("mousemove", (e) => {
// //     if (isDragging) {
// //       const newX = e.clientX - offsetX;
// //       const newY = e.clientY - offsetY;
// //       widget.style.left = `${newX}px`;
// //       widget.style.top = `${newY}px`;
// //       widget.style.right = "auto"; // Remove right positioning for proper dragging
// //     }
// //   });

// //   document.addEventListener("mouseup", () => {
// //     isDragging = false;
// //     widget.style.cursor = "grab";
// //   });

// //   // Add task event
// //   addTaskButton.addEventListener("click", addTask);

// //   // Handle "Enter" key for adding tasks
// //   taskInput.addEventListener("keyup", (e) => {
// //     if (e.key === "Enter") {
// //       addTask();
// //     }
// //   });

// //   // Initial render of tasks
// //   renderTasks();



// document.addEventListener("DOMContentLoaded", () => {
//   const widget = document.getElementById("widget");
//   const taskList = document.getElementById("task-list");
//   const taskInput = document.getElementById("task-input");
//   const addTaskButton = document.getElementById("add-task");

//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   let isDragging = false;
//   let currentX;
//   let currentY;
//   let initialX;
//   let initialY;
//   let xOffset = 0;
//   let yOffset = 0;

//   // Initialize widget position
//   function initializeWidgetPosition() {
//     const savedPosition = JSON.parse(localStorage.getItem("widgetPosition"));
//     if (savedPosition) {
//       setWidgetPosition(savedPosition.x, savedPosition.y);
//     } else {
//       // Center the widget by default
//       const x = (window.innerWidth - widget.offsetWidth) / 2;
//       const y = (window.innerHeight - widget.offsetHeight) / 2;
//       setWidgetPosition(x, y);
//     }
//   }

//   function setWidgetPosition(x, y) {
//     xOffset = x;
//     yOffset = y;
//     widget.style.transform = `translate(${x}px, ${y}px)`;
//   }

//   function saveWidgetPosition() {
//     localStorage.setItem("widgetPosition", JSON.stringify({ x: xOffset, y: yOffset }));
//   }

//   // Render tasks
//   const renderTasks = () => {
//     taskList.innerHTML = "";
//     tasks.forEach((task, index) => {
//       const li = document.createElement("li");
//       li.className = `task-item ${task.completed ? "completed" : ""}`;
//       li.innerHTML = `
//         <label>
//           <input type="checkbox" ${task.completed ? "checked" : ""} />
//           <span>${task.text}</span>
//         </label>
//         <button class="delete-task" data-index="${index}">❌</button>
//       `;
//       li.querySelector("input[type='checkbox']").addEventListener("click", () => toggleTask(index));
//       li.querySelector(".delete-task").addEventListener("click", () => deleteTask(index));
//       taskList.appendChild(li);
//     });
//     adjustWidgetHeight();
//   };

//   const addTask = () => {
//     const taskText = taskInput.value.trim();
//     if (taskText) {
//       tasks.push({ text: taskText, completed: false });
//       taskInput.value = "";
//       saveTasks();
//       taskInput.focus();
//     } else {
//       taskInput.classList.add('shake');
//       setTimeout(() => taskInput.classList.remove('shake'), 500);
//     }
//   };

//   const toggleTask = (index) => {
//     tasks[index].completed = !tasks[index].completed;
//     saveTasks();
//   };

//   const deleteTask = (index) => {
//     tasks.splice(index, 1);
//     saveTasks();
//   };

//   const saveTasks = () => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     renderTasks();
//   };

//   const adjustWidgetHeight = () => {
//     widget.style.height = 'auto';
//     const maxHeight = window.innerHeight * 0.8; // 80% of viewport height
//     if (widget.offsetHeight > maxHeight) {
//       widget.style.height = `${maxHeight}px`;
//     }
//   };

//   // Enhanced drag functionality
//   function dragStart(e) {
//     if (e.target.closest('.task-item, input, button')) return;
    
//     if (e.type === "touchstart") {
//       initialX = e.touches[0].clientX - xOffset;
//       initialY = e.touches[0].clientY - yOffset;
//     } else {
//       initialX = e.clientX - xOffset;
//       initialY = e.clientY - yOffset;
//     }

//     if (e.target === widget || e.target.closest('.title')) {
//       isDragging = true;
//       widget.classList.add('dragging');
//     }
//   }

//   function dragEnd() {
//     initialX = currentX;
//     initialY = currentY;
//     isDragging = false;
//     widget.classList.remove('dragging');
//     saveWidgetPosition();
//   }

//   function drag(e) {
//     if (isDragging) {
//       e.preventDefault();

//       if (e.type === "touchmove") {
//         currentX = e.touches[0].clientX - initialX;
//         currentY = e.touches[0].clientY - initialY;
//       } else {
//         currentX = e.clientX - initialX;
//         currentY = e.clientY - initialY;
//       }

//       // Keep widget within window bounds
//       const bounds = widget.getBoundingClientRect();
//       const margin = 10;
      
//       if (currentX < -bounds.width + margin) currentX = -bounds.width + margin;
//       if (currentX > window.innerWidth - margin) currentX = window.innerWidth - margin;
//       if (currentY < margin) currentY = margin;
//       if (currentY > window.innerHeight - margin) currentY = window.innerHeight - margin;

//       xOffset = currentX;
//       yOffset = currentY;
      
//       setWidgetPosition(currentX, currentY);
//     }
//   }

//   // Toggle widget active state
//   widget.addEventListener('mouseenter', () => {
//     widget.classList.add('active');
//   });

//   widget.addEventListener('mouseleave', () => {
//     if (!isDragging) {
//       widget.classList.remove('active');
//     }
//   });

//   // Event Listeners
//   widget.addEventListener('touchstart', dragStart, { passive: false });
//   widget.addEventListener('touchend', dragEnd, { passive: false });
//   widget.addEventListener('touchmove', drag, { passive: false });
//   widget.addEventListener('mousedown', dragStart);
//   document.addEventListener('mousemove', drag);
//   document.addEventListener('mouseup', dragEnd);
  
//   addTaskButton.addEventListener("click", addTask);
  
//   taskInput.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") addTask();
//   });

//   // Handle window resize
//   window.addEventListener('resize', () => {
//     adjustWidgetHeight();
//     const bounds = widget.getBoundingClientRect();
//     if (bounds.right > window.innerWidth || bounds.bottom > window.innerHeight) {
//       initializeWidgetPosition();
//     }
//   });

//   // Initialize the widget
//   initializeWidgetPosition();
//   renderTasks();
// });

document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskElement = document.createElement('div');
      taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
      
      taskElement.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <span>${task.text}</span>
        <button class="delete-btn">×</button>
      `;

      const checkbox = taskElement.querySelector('input');
      checkbox.addEventListener('change', () => toggleTask(index));

      const deleteBtn = taskElement.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => deleteTask(index));

      taskList.appendChild(taskElement);
    });
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text) {
      tasks.push({ text, completed: false });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
      renderTasks();
    }
  }

  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }

  addTaskButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  // Initial render
  renderTasks();
});