  const images = [
    "../web/img/자소1.jpg",
    "../web/img/자소2.jpg",
    "../web/img/자소3.jpg",
  ];//

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