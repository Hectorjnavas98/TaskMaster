const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const deleteModal = document.getElementById("delete-modal");
const editModal = document.getElementById("edit-modal");

let currentTask = null;
let editText = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("div");
  const newText = document.createElement("p");
  const buttonAdd = document.createElement("button");
  const buttonDelete = document.createElement("button");
  const spanAdd = document.createElement("span");
  const spanDelete = document.createElement("span");

  newTask.classList.add("task", "bg-white", "border", "rounded", "p-2", "m-1");
  newTask.setAttribute("draggable", "true");

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  newText.innerText = value;
  newTask.append(newText);

  //Button edit
  buttonAdd.setAttribute("type","button");
  buttonAdd.classList.add("btn", "float-end");  
  buttonAdd.setAttribute("data-bs-toggle","modal");
  buttonAdd.setAttribute("data-bs-target","#edit-modal");
  spanAdd.classList.add("bi-pencil");
  buttonAdd.append(spanAdd);

  //Button delete
  buttonDelete.setAttribute("type","button");
  buttonDelete.classList.add("btn", "float-end");
  buttonDelete.setAttribute("data-bs-toggle","modal");
  buttonDelete.setAttribute("data-bs-target","#delete-modal");
  spanDelete.classList.add("bi-trash");
  buttonDelete.append(spanDelete);

  newTask.append(buttonAdd);
  newTask.append(buttonDelete);

  todoLane.appendChild(newTask);

  input.value = "";
});

editModal.addEventListener('show.bs.modal', function (event) {
  let button = event.relatedTarget;
  currentTask = button.parentNode;
  let textTask = currentTask.children[0];
  let modalBodyInput = editModal.querySelector('.modal-body input');
  modalBodyInput.value = textTask.innerText;
})

editModal.addEventListener('hide.bs.modal', function (event) {
  let button = event.relatedTarget;
  let modalBodyInput = editModal.querySelector('.modal-body input');
  editText = modalBodyInput.value;
})

deleteModal.addEventListener('show.bs.modal', function (event) {
  let button = event.relatedTarget;
  currentTask = button.parentNode;
})

function changeTask() {
  let taskText = currentTask.children[0];
  if ( editText !== taskText.innerText ) {    
    taskText.innerText = editText;
  }
}


function deleteTask() {
  if ( currentTask !== null ) {
    currentTask.remove();
  }
}

function cancelModal() {
  currentTask = null;
}