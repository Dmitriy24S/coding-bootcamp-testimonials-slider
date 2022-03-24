const nextBtns = document.querySelectorAll(".next-arrow");
const prevBtns = document.querySelectorAll(".prev-arrow");
const reviews = Array.from(document.querySelectorAll(".text-section"));

let index = 1;

const changeActiveProfile = () => {
  // clear active review
  reviews.forEach((review) => {
    review.classList.remove("active");
  });
  // add new active review
  reviews[index].classList.add("active");
};

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (index >= reviews.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeActiveProfile();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (index === 0) {
      index = reviews.length - 1;
    } else {
      index--;
    }
    changeActiveProfile();
  });
});
