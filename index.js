import setPolicies from "./modules/policies.js";
import { setLinks, setModal } from "./modules/menu-modal.js";
import { setTeaTypes } from "./modules/tea-types.js";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.ACCESS_KEY}`;
// ---------------- dynamic rendering ----------------
window.addEventListener("DOMContentLoaded", function () {
  setPolicies();
  setLinks();
  setTeaTypes();
});

//---------------- toggle menu-modal ----------------
const modalContainer = document.getElementById("menu-modal");
const menuButton = document.getElementById("menu-bar-button");
menuButton.addEventListener("click", function () {
  modalContainer.classList.toggle("menu-modal-move");
  setModal();
});

//---------------- slider for the sustainability section ----------------
const slideController = document.querySelectorAll(".sustain-message > input");
const slides = document.querySelector(".sustain-products");
slideController.forEach((controller, index) => {
  controller.addEventListener("click", function () {
    const leftMargin = index * 100;
    slides.style.marginLeft = `-${leftMargin}%`;
  });
});
