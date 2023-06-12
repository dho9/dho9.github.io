const textElement = document.querySelector(".nav p");


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
