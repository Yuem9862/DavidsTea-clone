import setPolicies from "./modules/policies.js";
import { setLinks, setModal } from "./modules/menu-modal.js";

// ---------------- dynamic rendering ----------------
window.addEventListener("DOMContentLoaded", function () {
  setPolicies();
  setLinks();
  setModal();
});

//---------------- toggle menu-modal ----------------
const modal = document.getElementById("menu-modal");

const menuButton = document.getElementById("menu-bar-button");
menuButton.addEventListener("click", function () {
  modal.classList.toggle("menu-modal-move");
});
