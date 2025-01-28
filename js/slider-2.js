//Slider
const sliderTwo = function () {
  const slides = document.querySelectorAll(".slideTwo");
  // const btnLeft = document.querySelector(".sliderTwo__btn--left");
  // const btnRight = document.querySelector(".sliderTwo__btn--right");
  const dotContainer = document.querySelector(".sliderTwo-dots");

  let curSlide = 0;
  let slideTimeout = null;
  const maxSlide = slides.length;





  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="sliderTwo-dots__dot" data-slideTwo="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".sliderTwo-dots__dot")
      .forEach((dot) => dot.classList.remove("sliderTwo-dots__dot--active"));
    document
      .querySelector(`.sliderTwo-dots__dot[data-slideTwo="${slide}"]`)
      .classList.add("sliderTwo-dots__dot--active");
  };

  const goToSlide = function (slide) {
    clearTimeout(slideTimeout);

    curSlide = slide

    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );

    slideTimeout = setTimeout(() => {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    }, 5000)
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("sliderTwo-dots__dot")) {
      const { slidetwo } = e.target.dataset;
      goToSlide(slidetwo);
      activateDot(slidetwo);
    }
  });
};

sliderTwo();
