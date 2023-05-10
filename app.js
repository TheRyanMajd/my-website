const projectPage = document.querySelector(".project-page");
const projects = document.querySelectorAll(".project");

if (button.textContent === "Light Mode") {
  // Light mode styles
  body.style.backgroundColor = "#fff";
  nav.style.backgroundColor = "#BA0C2F";
  navLinks.forEach((link) => (link.style.color = "#fff"));
  hero.style.backgroundColor = "#fff";
  button.textContent = "Dark Mode";
  document.querySelector(".column-left").style.color = "black";
  hero.style.color = "black";
  projectPage.style.backgroundColor = "#fff";
  projects.forEach((project) => {
    project.style.backgroundColor = "#fff";
  });
} else {
  // Dark mode styles
  body.style.backgroundColor = "";
  nav.style.backgroundColor = "#BA0C2F";
  navLinks.forEach((link) => (link.style.color = ""));
  hero.style.backgroundColor = "black";
  document.querySelector(".column-left").style.color = "white";
  button.textContent = "Light Mode";
  hero.style.color = "white";
  projectPage.style.backgroundColor = "black";
  projects.forEach((project) => {
    project.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  });
}