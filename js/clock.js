const clockContainer = document.querySelector(".js-clock"),
  clockText = clockContainer.querySelector(".clockText"),
  dateText = clockContainer.querySelector(".dateText");

function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  clockText.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const cureentdate = date.getDate();
  const day = dayChanger(date.getDay());
  dateText.innerText = `${year}/${month}/${cureentdate}/${day}`;
}

function dayChanger(day) {
  switch (day) {
    case 1:
      return "Mon";
      break;
    case 2:
      return "Tue";
      break;
    case 3:
      return "Wed";
      break;
    case 4:
      return "Thu";
      break;
    case 5:
      return "Fri";
      break;
    case 6:
      return "Sat";
      break;
    case 0:
      return "Sun";
      break;
  }
}

function init() {
  getTime();
  getDate();
  setInterval(getTime, 1000);
}

init();
