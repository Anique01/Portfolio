document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".theme-toggle-button");
  const body = document.body;
  const logoImage = document.querySelector("img.logo"); 


  const updateLogo = () => {
    if (body.classList.contains("dark")) {
      logoImage.src = "Light.png"; 
      logoImage.alt = "Dark Mode Logo";
    } else {
      logoImage.src = "Dark.png"; 
      logoImage.alt = "Light Mode Logo";
    }
  };


  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    updateLogo(); 
  });


  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  } else {

    body.classList.remove("dark"); 
  }
  updateLogo(); 
});