document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".theme-toggle-button");
  const body = document.body;
  const logoImages = document.querySelectorAll("img.logo"); 

  const updateLogos = () => {
    logoImages.forEach(logo => {
      if (body.classList.contains("dark")) {
        logo.src = "Logo/Light.png"; 
        logo.alt = "Dark Mode Logo";
      } else {
        logo.src = "Logo/Dark.png"; 
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
