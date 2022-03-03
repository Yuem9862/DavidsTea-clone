import setPolicies from "./modules/policies.js";
import { setLinks, setModal } from "./modules/menu-modal.js";

// ---------------- dynamic rendering ----------------
window.addEventListener("DOMContentLoaded", function () {
  setPolicies();
  setLinks();
});

//---------------- toggle menu-modal ----------------
const modalContainer = document.getElementById("menu-modal");
const menuButton = document.getElementById("menu-bar-button");
menuButton.addEventListener("click", function () {
  modalContainer.classList.toggle("menu-modal-move");
  setModal();
});
