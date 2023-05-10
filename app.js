function toggleMode() {
  const body = document.querySelector("body");
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero");
  const navLinks = document.querySelectorAll("nav a");
  const button = document.querySelector("button");
  const columnLeft = document.querySelector(".column-left");
  const columnRight = document.querySelector(".column-right");

  if (button.textContent === "Light Mode") {
    body.style.backgroundColor = "#fff";
    nav.style.backgroundColor = "#BA0C2F";
    navLinks.forEach((link) => (link.style.color = "#fff"));
    hero.style.backgroundColor = "#fff";
    hero.style.color = "black";
    button.style.backgroundColor = "#BA0C2F";
    button.style.color = "#fff";
    columnLeft.style.color = "black";
    columnRight.style.color = "black";
    button.textContent = "Dark Mode";
  } else {
    body.style.backgroundColor = "000";
    nav.style.backgroundColor = "#BA0C2F";
    navLinks.forEach((link) => (link.style.color = "black"));
    hero.style.backgroundColor = "black";
    hero.style.color = "#fff";
    button.style.backgroundColor = "";
    button.style.color = "";
    columnLeft.style.color = "white";
    columnRight.style.color = "white";
    button.textContent = "Light Mode";
  }
}
