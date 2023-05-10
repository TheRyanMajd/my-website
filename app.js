function toggleMode() {
  const body = document.querySelector("body");
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero");
  const navLinks = document.querySelectorAll("nav a");
  const button = document.querySelector("button");

  if (button.textContent === "Light Mode") {
    body.style.backgroundColor = "#fff";
    nav.style.backgroundColor = "#BA0C2F";
    navLinks.forEach((link) => (link.style.color = "#fff"));
    hero.style.backgroundColor = "#fff";
    button.textContent = "Dark Mode";
    hero.style.color = "black";
  } else {
    body.style.backgroundColor = "";
    nav.style.backgroundColor = "#BA0C2F";
    navLinks.forEach((link) => (link.style.color = ""));
    hero.style.backgroundColor = "black";
    button.textContent = "Light Mode";
  }
}