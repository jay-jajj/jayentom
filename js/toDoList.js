const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  listBox = document.querySelector(".js-listBox"),
  completeBox = document.querySelector(".js-completeBox");

const TODOS_LS = "toDos",
  BTN_CL = "btn",
  COMPLETE_LS = "complete";

//변경되야 하기 때문에 배열로생성
let toDos = [],
  completes_AR = [];

function deletTodo(event) {
  //target은 어느것이 이벤트에 적용될지를 지정
  const btn = event.target;
  //부모 노드를 저장
  const li = btn.parentNode;
  //리스트를 삭제
  listBox.removeChild(li);
  //filer함수는 foreach함수와 같이 배열에 사용하는 함수이다.
  //foreach함수와 같이 배열의 모든 항목에 함수를 적용하는데
  //차이점은 함수가 적용된 배열을 만들어 준다.(return해준다.)
  const cleanToDos = toDos.filter(function (todo) {
    //배열에 항목을 넣는 부분이다.
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  //JSON.stringify는 js object를 stirng파일로 바꿔줌
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function completeToDos(event) {
  const li = event.target.parentNode.childNodes;
  console.log(li);
  paintCompleteList(text);
  deletTodo(event);
}

function paintToDoList(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const newId = toDos.length + 1;
  //이모지도 string이다. window + . 해주면 쓸수있다.
  delBtn.innerText = "🗑";
  delBtn.addEventListener("click", deletTodo);
  delBtn.classList.add(BTN_CL);
  completeBtn.innerText = "✔";
  completeBtn.addEventListener("click", completeToDos);
  completeBtn.classList.add(BTN_CL);
  span.innerText = text;
  //자식을 추가하는것
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(completeBtn);
  li.id = newId;
  listBox.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function loadToDoList() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    //forEach함수는 배열에 쓰는데 각 배열 요소들마다 함수를 실행시킨다.
    parsedToDos.forEach(function (toDo) {
      paintToDoList(toDo.text);
    });
  } else {
    console.log("data is null");
  }
}

function loadCompleteList(){
  const loadedcompletes = localStorage.getItem(COMPLETE_LS);
  if (loadedcompletes !== null) {
    const parsedcompletes = JSON.parse(loadedcompletes);
    //forEach함수는 배열에 쓰는데 각 배열 요소들마다 함수를 실행시킨다.
    parsedcompletes.forEach(function (completes) {
      paintCompleteList(completes.text);
    });
  } else {
    console.log("data is null");
  }
}

function paintCompleteList(completes) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = completes.length + 1;
  //이모지도 string이다. window + . 해주면 쓸수있다.
  delBtn.innerText = "🗑";
  delBtn.addEventListener("click", deletTodo);
  delBtn.classList.add(BTN_CL);
  span.innerText = todo;
  //자식을 추가하는것
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  completeBox.appendChild(li);
  const completeObj = {
    text: text,
    id: newId
  };
  completes.push(completeObj);
  saveComplete();
}
function deleteComplete(event) {
  //target은 어느것이 이벤트에 적용될지를 지정
  const btn = event.target;
  //부모 노드를 저장
  const li = btn.parentNode;
  //리스트를 삭제
  listBox.removeChild(li);
  //filer함수는 foreach함수와 같이 배열에 사용하는 함수이다.
  //foreach함수와 같이 배열의 모든 항목에 함수를 적용하는데
  //차이점은 함수가 적용된 배열을 만들어 준다.(return해준다.)
  const cleanComplete = completes.filter(function (complete) {
    //배열에 항목을 넣는 부분이다.
    return complete.id !== parseInt(li.id);
  });
  toDos = cleanComplete;
  saveComplete();
}
function saveComplete() {
  localStorage.setItem(COMPLETE_LS, JSON.stringify(completes));
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDoList(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDoList();
  loadCompleteList();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
