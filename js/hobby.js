
const textElements = document.querySelectorAll(".nav a.show");
const modalBtn = document.getElementById("modal_btn");
const modalWrap = document.querySelector(".modal_wrap");
const blackBg = document.querySelector(".black_bg");

function fadeInText() {
  textElements.forEach(function (textElement) {
    textElement.style.opacity = 1;
    setTimeout(function () {
      textElement.style.opacity = 0;
    }, 1000);
  });
}

setInterval(fadeInText, 2000);

function popup() {
  const popup = open(
    "https://www.youtube.com/embed/evvSCytIJ24",
    "popup",
    "width=300px, height=300px, left=100px, top=100px"
  );
  console.log(popup);
}

function popup1() {
  const popup = open(
    "https://www.youtube.com/embed/Sq9DmUBdQMs",
    
    "popup",
    "width=300px, height=300px, left=100px, top=100px"
  );
  console.log(popup);
}

function popup2() {
  const popup = open(
    "https://www.youtube.com/embed/-rTMliA7MHc",
   
    "popup",
    "width=300px, height=300px, left=100px, top=100px"
  );
  console.log(popup);
}

modalBtn.addEventListener("click", function () {
  modalWrap.style.display = "block";
  blackBg.style.display = "block";
});

function modal_Close() {
  modalWrap.style.display = "none";
  blackBg.style.display = "none";
}
const slides = document.querySelectorAll('.slider img');
const images = [
"img/1.jpg",
"img/2.jpg",
"img/3.jpg",
"img/4.jpg",
"img/5.jpg",
"img/6.jpg",
"img/7.jpg",
];
let currentIndex = 0;
const modalImageElement = document.getElementById("modal_image");

function showModal() {
  const modal = document.getElementsByClassName("modal_wrap")[0];
modal.style.display = "block";
changeImage();
}

function closeModal() {
  const modal = document.getElementsByClassName("modal_wrap")[0];
modal.style.display = "none";
}

function changeImage() {
currentIndex++;
if (currentIndex >= images.length) {
  currentIndex = 0;
}
const img = new Image();
img.onload = function () {
  modalImageElement.src = this.src;
  modalImageElement.style.width = "100%"; // 이미지를 원래 크기로 표시
  modalImageElement.style.height = "1024px";
};
img.src = images[currentIndex];
}

changeImage(); // 초기 이미지 설정

// 다음 버튼 클릭 시 이미지 변경
const buttonNext = document.getElementById("buttonNext");
buttonNext.addEventListener("click", changeImage);
