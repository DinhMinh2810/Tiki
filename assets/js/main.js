const inputSearch = document.querySelector(".header__search-input-wrap");
const historySearch = document.querySelector(".header__search--history");
const modal = document.querySelector(".modal__overlay");
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slideIndex = 1;
showSlides(slideIndex);

// Search function
inputSearch.addEventListener("click", () => {
  historySearch.classList.toggle("show__history");
  modal.classList.toggle("open-modal");
});

// Slide ad
let plusSlides = function (n) {
  showSlides(slideIndex += n);
};


let currentSlide = function (n) {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

next.addEventListener("click", () => {
  plusSlides(1);
})

prev.addEventListener("click", () => {
  plusSlides(-1);
})

dots.forEach(function (dot) {
  dot.addEventListener("click", e => {
    const id = e.target.dataset.id;
    currentSlide(id);
  });
});

