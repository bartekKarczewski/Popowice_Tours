//SECTIONS
const heroSection = document.querySelector(".hero");
const toursSection = document.querySelector(".tours");
const reviewSection = document.querySelector(".testimonials");

const form = document.querySelector(".tour-form-overlay");
const burgerOverlay = document.querySelector(".burger-overlay");
const burgerOval = document.querySelector(".burger-menu-oval");
//BUTTONS

const burgerBtn = document.getElementById("burgerBtn");

const heroSectionBtn = document.querySelector(".btn");
const toursButtons = document.querySelectorAll(".toursBtn");
const reviewButtons = document.querySelectorAll(".reviewBtn");

const bookingBtns = document.querySelectorAll(".btn-price");

const closeModalBtn = document.querySelector(".close-overlay");
//FUNCTIONS
function scrollTo(event, section) {
  event.preventDefault();
  section.scrollIntoView();
}

function openForm() {
  let selectedOption = document.getElementById(`${event.target.dataset.tour}`);
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

burgerOverlay.addEventListener("click", (event) => {
  if (event.target === burgerOverlay) {
    burgerOverlay.classList.remove("show-burger-menu");
  }
});

heroSectionBtn.addEventListener("click", (event) => {
  scrollTo(event, toursSection);
});
for (const tourBtn of toursButtons) {
  tourBtn.addEventListener("click", (event) => {
    scrollTo(event, toursSection);
    burgerOverlay.classList.remove("show-burger-menu");
  });
}

for (const reviewBtn of reviewButtons) {
  reviewBtn.addEventListener("click", (event) => {
    scrollTo(event, reviewSection);
  });
}

for (const bookingBtn of bookingBtns) {
  bookingBtn.addEventListener("click", openForm);
}

closeModalBtn.addEventListener("click", closeModal);

document.addEventListener("click", (event) => {
  if (form == event.target) {
    form.style.display = "none";
  }
});
