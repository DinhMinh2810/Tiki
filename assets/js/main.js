const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const countDownDate = new Date("Oct 5, 2021 23:00:00").getTime();
const timeHours = document.querySelector(".shock__time--hours");
const timeMinutes = document.querySelector(".shock__time--minutes");
const timeSeconds = document.querySelector(".shock__time--seconds");
const outTime = document.querySelector(".shock__time--coutdown");
const modal = document.querySelector(".modal");
const modalOverLay = document.querySelector(".modal__overlay");
const modalBtns = document.querySelectorAll(".header__account--modal");
const modalCancelBtn = document.querySelector(".modal__cancel");
let slideIndex = 1;
showSlides(slideIndex);

// Modal
modalBtns.forEach((btn) => {
  btn.onclick = () => {
    modal.style.display = "flex";
  };
});

modalCancelBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modalOverLay) {
    modal.style.display = "none";
  }
};

// Slide ad
let plusSlides = function (n) {
  showSlides((slideIndex += n));
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
});

prev.addEventListener("click", () => {
  plusSlides(-1);
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    currentSlide(id);
  });
});

// Countdown timers

function pad(d) {
  return d < 10 ? "0" + d.toString() : d.toString();
}

const x = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeHours.innerHTML = pad(hours);
  timeMinutes.innerHTML = pad(minutes);
  timeSeconds.innerHTML = pad(seconds);

  if (distance < 0) {
    clearInterval(x);
    outTime.innerHTML = "Out time sales !!";
    outTime.style.fontSize = " 1.6em";
    outTime.style.fontWeight = "600";
    outTime.style.color = "rgb(120, 120, 120)";
  }
}, 0);

// Slick
