import "./style.css";   
import { renderMenu } from "./pages/menu.js";
import { renderHome } from "./pages/home.js";
import { renderContact } from "./pages/contact.js";
import { renderAbout } from "./pages/about.js";
const contentDiv = document.getElementById("content");
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");
const navButtons = document.querySelectorAll("nav button");

function setActiveButtons(button) {
    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    contentDiv.appendChild(renderHome());
    setActiveButtons(homeButton);
});

homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(renderHome());
    setActiveButtons(homeButton);
});

menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(renderMenu());
    setActiveButtons(menuButton);
});

aboutButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(renderAbout());
    setActiveButtons(aboutButton);
});

contactButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(renderContact());
    setActiveButtons(contactButton);
});

