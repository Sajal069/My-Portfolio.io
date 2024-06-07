document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card1");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("grow-up");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.remove("grow-up");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card2");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("grow-up");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.remove("grow-up");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card3");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("grow-up");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.remove("grow-up");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const projectsSection = document.getElementById('projects');
  const projectElements = document.querySelectorAll('.project');

  function elementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    if (elementInViewport(projectsSection)) {
      projectElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate');
        }, index * 300); // Delay each animation by 300ms
      });
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check if already in view on page load
});
