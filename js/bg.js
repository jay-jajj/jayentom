//body 태그를 dom으로 가져온다.
const body = document.querySelector("body");

//이미지를 매길 번호
const IMG_NUMBER = 4;

//이미지를 띄우는 함수
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgimage");
  //appendchild부모에게 추가 한다는 것이다.
  body.appendChild(image);
}

//숫자를 랜덤하게 배출하는 함수
function genRandom() {
  //math는 수학적 함수들이 들어있는객체
  //floor는 소수점을 내림하는 함수이다.
  //random은 램덤하게 숫자를 준다. Math.random()*숫자 식으로하면 뒤에있는 숫자범위내에서 랜덤하게 숫자를 준다.
  const number = Math.floor(Math.random() * 4);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
