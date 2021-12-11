const nextBtns = document.querySelectorAll(".next-arrow");
const prevBtns = document.querySelectorAll(".prev-arrow");
const reviews = document.querySelectorAll(".text-section");

const changeActiveProfile = () => {
  reviews.forEach((review) => {
    review.classList.toggle("active");
  });
};

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeActiveProfile();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeActiveProfile();
  });
});
