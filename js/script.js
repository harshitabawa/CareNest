document.addEventListener("DOMContentLoaded", () => {
  /* --------------------- Typing Effect --------------------- */
  if (typeof Typed !== "undefined") {
    new Typed(".type", {
      strings: ["loved ones", "elders", "family"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  /* --------------------- Navbar Smooth Scroll --------------------- */
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          navbarLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  /* --------------------- Reveal on Scroll --------------------- */
  const scrollItems = document.querySelectorAll(".about-img, .plan-card, .profile-card, .hero-text, .hero-img");
  const revealOnScroll = () => {
    scrollItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        item.classList.add("in-view");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  revealOnScroll();

  /* --------------------- Caregiver Carousel --------------------- */
  const carousel = document.querySelector('.caregiver-profiles');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (carousel && prevBtn && nextBtn) {
    const scrollAmount = 300; // card width

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      // Reset if reached end
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 5000);
  }

  /* --------------------- Intersection Observer for hidden elements --------------------- */
  const hiddenElements = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  hiddenElements.forEach(el => observer.observe(el));

  /* --------------------- Intersection Observer for "Choose Us" items --------------------- */
  const chooseItems = document.querySelectorAll(".choose-item");
  const chooseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        chooseObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  chooseItems.forEach(item => chooseObserver.observe(item));
});


/* --------------------- Hero Background Slider --------------------- */
const slides = document.querySelectorAll('.hero-slides img');
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 3000); 

