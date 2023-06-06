var ratingStars = document.querySelectorAll("#rating span");

function activateStars(clickedStar) {
  ratingStars.forEach(function (star) {
    star.classList.remove("active");
  });

  for (var i = 0; i <= clickedStar; i++) {
    ratingStars[i].classList.add("active");
  }
}

ratingStars.forEach(function (star, index) {
  star.addEventListener("click", function () {
    activateStars(index);
  });
});
