document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".theme-toggle-button");
  const body = document.body;
  const logoImages = document.querySelectorAll("img.logo"); 

  const updateLogos = () => {
    logoImages.forEach(logo => {
      if (body.classList.contains("dark")) {
        logo.src = "Logo/CompleteDark.png"; 
        logo.alt = "Dark Mode Logo";
      } else {
        logo.src = "Logo/CompleteLight.png"; 
        logo.alt = "Light Mode Logo";
      }
    });
  };

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    updateLogos(); 
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark"); 
  }
  updateLogos(); 
});

const header = document.querySelector('.header');
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // When scrolling down more than 100px, add the hidden class
      if (lastScrollY > 70) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      ticking = false;
    });
    ticking = true;
  }
});
