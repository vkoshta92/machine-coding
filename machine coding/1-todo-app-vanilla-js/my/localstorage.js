document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.querySelector(".todo-form");
    const todoInput = document.querySelector(".todo-input");
    const todoList = document.querySelector(".todo-list");
    const todoSubmit = document.querySelector(".todo-submit");
    let editMode = false;
    let editItem = null;
  
    // Load tasks from local storage on startup
    function loadTodos() {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      savedTodos.forEach(todo => addTodoItem(todo));
    }
  
    // Save tasks to local storage
    function saveTodos() {
      const todos = Array.from(todoList.children).map(item => item.firstChild.textContent);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const todoText = todoInput.value.trim();
  
      if (todoText !== "") {
        if (editMode) {
          editItem.firstChild.textContent = todoText;
          todoSubmit.innerText = "Add Todo";
          editMode = false;
          editItem = null;
        } else {
          addTodoItem(todoText);
        }
        saveTodos(); // Save updated list to local storage
        todoInput.value = "";
      } else {
        alert("Please enter a valid task");
      }
    });
  
    // Event delegation for edit and delete buttons
    todoList.addEventListener("click", function (event) {
      const target = event.target;
  
      if (target.tagName === "BUTTON") {
        const todoItem = target.parentNode;
        if (target.innerText === "❌") {
          todoItem.remove(); // Delete todo
          saveTodos(); // Save updated list to local storage
        } else if (target.innerText === "✏️") {
          editMode = true;
          editItem = todoItem;
          todoSubmit.innerText = "Edit Todo";
          todoInput.value = todoItem.firstChild.textContent;
          todoInput.focus();
        }
      }
    });
  
    // Function to add task to the list
    function addTodoItem(todoText) {
      const todoItem = document.createElement("li");
      const editButton = document.createElement("button");
      const removeButton = document.createElement("button");
      todoItem.innerHTML = `<span>${todoText}</span>`;
      editButton.innerText = `✏️`;
      removeButton.innerText = `❌`;
      todoItem.appendChild(editButton);
      todoItem.appendChild(removeButton);
      todoList.appendChild(todoItem);
    }
  
    // Load todos when the DOM is loaded
    loadTodos();
  });
  