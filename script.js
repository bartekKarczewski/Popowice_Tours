//SECTIONS
const heroSection = document.querySelector(".hero");
const toursSection = document.querySelector(".tours");
const reviewSection = document.querySelector(".testimonials");

const form = document.querySelector(".tour-form-overlay");
const burgerOverlay = document.querySelector(".burger-overlay-menu");
//BUTTONS

const burgerBtn = document.getElementById("burgerBtn");

const heroSectionBtn = document.querySelector(".btn");
const toursButton = document.getElementById("toursBtn");
const reviewButton = document.getElementById("reviewBtn");

const bookingBtns = document.querySelectorAll(".btn-price");

const closeModalBtn = document.querySelector(".close-overlay");
//FUNCTIONS
function scrollTo(event, section) {
  event.preventDefault();
  section.scrollIntoView();
}

function openForm() {
  const selectedOption = document.getElementById(
    `${event.target.dataset.tour}`
  );
  form.style.display = "flex";
  selectedOption.setAttribute("selected", true);
}

function closeModal() {
  const allOptions = document.querySelectorAll("option");
  for (option of allOptions) {
    option.removeAttribute("selected");
  }
  form.style.display = "none";
}

//Event listeners
burgerBtn.addEventListener("click", (event) => {
  burgerOverlay.classList.toggle("show-burger-menu");
});

heroSectionBtn.addEventListener("click", (event) => {
  scrollTo(event, toursSection);
});
toursButton.addEventListener("click", (event) => {
  scrollTo(event, toursSection);
});

reviewButton.addEventListener("click", (event) => {
  scrollTo(event, reviewSection);
});

for (bookingBtn of bookingBtns) {
  bookingBtn.addEventListener("click", openForm);
}

closeModalBtn.addEventListener("click", closeModal);
