const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      otherAnswer.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-slider-dots .dot");

let currentHeroSlide = 0;
let heroSliderInterval;

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  heroDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentHeroSlide = index;
}

function nextHeroSlide() {
  const nextIndex = (currentHeroSlide + 1) % heroSlides.length;
  showHeroSlide(nextIndex);
}

function startHeroSlider() {
  heroSliderInterval = setInterval(nextHeroSlide, 3000);
}

function resetHeroSlider() {
  clearInterval(heroSliderInterval);
  startHeroSlider();
}

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showHeroSlide(index);
    resetHeroSlider();
  });
});

if (heroSlides.length > 0) {
  showHeroSlide(0);
  startHeroSlider();
}
const fadeElements = document.querySelectorAll(".fade-element");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeElements.forEach((el) => observer.observe(el));