// Wait for DOM to be fully loaded before executing code
document.addEventListener("DOMContentLoaded", () => {
  // Theme switching functionality
  const toggleButton = document.querySelector(".theme-toggle-button");
  const body = document.body;
  const logoImages = document.querySelectorAll("img.logo"); 

  /**
   * Updates logo images based on current theme
   */
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

  // Add click event listener to theme toggle button
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // Save theme preference to localStorage
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    
    updateLogos(); 
  });

  // Load saved theme preference from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark"); 
  }
  
  // Initialize logos based on current theme
  updateLogos(); 
  
  // Header visibility on scroll functionality
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    // Use requestAnimationFrame for better performance
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Hide header when scrolling down more than 70px
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
});