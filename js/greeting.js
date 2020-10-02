const nameForm = document.querySelector(".js-nameForm"),
  input = nameForm.querySelector("input"),
  greeting = document.querySelector(".greeting");

const USER_LS = "currentUser",
  NAMEFORM_CL = "nameForm",
  SHOWING_CL = "showing";

function getTime() {
  const date = new Date();
  const hours = parseInt(date.getHours());
  let time = "Welcome!";
  if (hours < 12) {
    time = "Good morning";
  } else if (hours >= 12 && hours <= 18) {
    time = "Good afternoon";
  } else {
    time = "Good evening";
  }
  return time;
}

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const userName = input.value;
  paintGreeting(userName);
  saveName(userName);
}

function askForname() {
  //이벤트 리스너 달기 ("이벤트 종류", 함수) 함수 뒤에 괄호를 붙이면 바로 실행하라는것임 그래서 붙이면 안됨.
  nameForm.classList.add(SHOWING_CL);
  console.log("in!!!");
  nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
  const greet = getTime();
  nameForm.classList.remove(SHOWING_CL);
  greeting.classList.add(SHOWING_CL);
  greeting.innerText = `${greet} ${name}!`;
}

function loadName() {
  currentUser = localStorage.getItem(USER_LS);
  if (currentUser == null) {
    askForname();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
