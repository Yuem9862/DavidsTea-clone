import setPolicies from "./modules/policies.js";
import { setLinks, setModal } from "./modules/menu-modal.js";
import { setTeaTypes } from "./modules/tea-types.js";
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

// ---------------- hover effect for the tea types ----------------
