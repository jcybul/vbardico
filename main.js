const imgElement = document.getElementById("portfolio-image");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
let currentImageIndex = 1;

previousBtn.addEventListener("click", () => {
  if (currentImageIndex > 1) {
    currentImageIndex--;
    imgElement.src = "images/png" + currentImageIndex + ".png";
  }
});

nextBtn.addEventListener("click", () => {
  if (currentImageIndex < 68) {
    currentImageIndex++;
    imgElement.src = "images/png" + currentImageIndex + ".png";
  }
});