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

document.addEventListener("DOMContentLoaded", function () {
  const projectsSection = document.getElementById("projects");
  const projectElements = document.querySelectorAll(".project");

  function elementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (elementInViewport(projectsSection)) {
      projectElements.forEach((el) => {
        el.classList.add("animate");
      });
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
