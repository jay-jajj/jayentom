const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  listBox = document.querySelector(".js-listBox");

const TODOS_LS = "toDos";

function getToDo() {}

function paintToDoList() {}

function loadToDoList() {
  localStorage.getItem();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDoList(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDoList();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
