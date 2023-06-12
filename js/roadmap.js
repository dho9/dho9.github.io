const images = [
  "../web/img/001.jpg",
  "../web/img/002.jpg",
  "../web/img/003.jpg",
  "../web/img/004.jpg",
  "../web/img/005.jpg",
  "../web/img/006.jpg",
  "../web/img/007.jpg",
  
];

let currentIndex = 0;
const imageElement = document.getElementById("image");
const buttonElement = document.getElementById("myButton"); 
const textElement = document.querySelector(".nav p");

function changeImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  imageElement.src = images[currentIndex];
}
const interval = setInterval(fadeInText, 1500);

function fadeInText() {
  textElement.classList.add("show"); 
  setTimeout(function() {
    textElement.classList.remove("show"); 
  }, 1000);
}


window.addEventListener("beforeunload", function() {
  clearInterval(interval);
});

imageElement.style.width = "100%"; 