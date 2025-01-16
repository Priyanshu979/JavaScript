let addbtn = document.getElementById("addBtn");
let todoInput = document.getElementById("todoinput");
let todolist = document.getElementById("todo-list");

function addTask() {
  let task = todoInput.value.trim();
  if (task === "") {
    alert("Please write down task");
    return;
  }
  let li = document.createElement("li");
  li.textContent = task;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(deleteBtn);

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  li.appendChild(editBtn);
  // console.log(editBtn, "editbtn");

  todolist.appendChild(li);

  todoInput.value = "";

  deleteBtn.addEventListener("click", () => {
    todolist.removeChild(li);
  });

  editBtn.addEventListener("click", () => {
    let update = prompt("Edit Task:");
    if (update !== null) {
      todolist.textContent = update;
      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      li.textContent = editBtn;
      todolist.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        let update = prompt("Edit Task:");
        todolist.textContent = update;
        todolist.appendChild(editBtn)
      });
    }
  });
}
addbtn.addEventListener("click", addTask);
