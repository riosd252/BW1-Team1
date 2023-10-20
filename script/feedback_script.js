const myStars = document.querySelectorAll(".myStars");

myStars.forEach((star) => {
  star.onclick = function (e) {
    console.log(e.currentTarget);
    let clickedStar = e.currentTarget;
    const starIndex = clickedStar.dataset.index - 1;
    console.log(starIndex);
    for (let i = 0; i < myStars.length; i++) {
      if (i <= starIndex) {
        myStars[i].classList.add("star-is-active");
      } else {
        myStars[i].classList.remove("star-is-active");
      }
    }
  };
});
