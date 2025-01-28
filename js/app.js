// Pill loading animation
const introPage = document.getElementById("introductory-page");
const pillSteps = document.querySelectorAll(".pill-step");
const pillFill = document.getElementById("pill-fill");
const categoryTabs = document.querySelector(".category__tab-container");
const tabs = document.querySelectorAll(".category__tab");
const tabsContent = document.querySelectorAll(".category__content");

let counter = 1;

function fillStep() {
  if (counter < pillSteps.length) {
    pillSteps[counter++].classList.add("active");
    setTimeout(fillStep, 800);
  } else {
    introPage.style.display = "none";
  }

  return;
}
setTimeout(fillStep, 800);

categoryTabs.addEventListener("click", function (e) {
  const clicked = e.target.closest(".category__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("active-category"));
  tabsContent.forEach((c) => c.classList.remove("active-category-content"));

  // Activate tab
  clicked.classList.add("active-category");

  // Activate content area
  document
    .querySelector(`.category__content--${clicked.dataset.tab}`)
    .classList.add("active-category-content");
});

