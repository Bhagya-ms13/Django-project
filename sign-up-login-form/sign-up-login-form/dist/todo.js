document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-button");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.querySelector(".todo-list");
  
    addButton.addEventListener("click", function() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = "";
      }
    });
  
    todoList.addEventListener("click", function(e) {
      const target = e.target;
      if (target.tagName === "LI") {
        target.classList.toggle("completed");
      }
    });
  });
  