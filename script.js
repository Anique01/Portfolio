document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".theme-toggle-button");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
