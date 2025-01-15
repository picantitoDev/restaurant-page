import "./styles.css";
import { home } from "./home.js"
import { menu } from "./menu.js"

let homeButton = document.querySelector("#home")
let menuButton = document.querySelector("#menu")
let aboutButton = document.querySelector("#about")
let contactButton = document.querySelector("#contact")

homeButton.addEventListener("click", function () {
  home();
});

menuButton.addEventListener("click", function () {
  menu();
});

aboutButton.addEventListener("click", function () {

});

contactButton.addEventListener("click", function () {

});