import { setPolicies, startSlider } from "./modules/policies.js";
import { setLinks, setModal } from "./modules/menu-modal.js";
import { setTeaTypes } from "./modules/tea-types.js";
import fetchImages from "./modules/feed.js";
import DAVIDS_TEA_ACCESS_KEY from "./key.js";
const mainURL = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=${DAVIDS_TEA_ACCESS_KEY}`;
const query = `&query=drink`;
const API_ENDPOINT = `${mainURL}${clientID}${query}`;

// ---------------- dynamic rendering the page----------------
window.addEventListener("DOMContentLoaded", function () {
  setPolicies();
  setLinks();
  setTeaTypes();
  //autoplay the slider in the policy section
  window.setInterval(startSlider, 4000);

  //center the media mentions section
  const startPosition = Math.ceil(
    vogueElement.getBoundingClientRect().width / 2 + vogueElement.offsetLeft
  );
  const startOffset = Math.round(divCenter - startPosition);
  mediaContainer.style.transform = `translateX(${startOffset}px)`;
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
const slideLabal = document.querySelectorAll(".sustain-manual-btn");
const slides = document.querySelector(".sustain-products");
slideController.forEach((controller, index) => {
  controller.addEventListener("click", function () {
    const leftMargin = index * 100;
    slides.style.marginLeft = `-${leftMargin}%`;

    slideLabal.forEach((label) => {
      if (label.classList.contains("sustain-btn-clicked")) {
        label.classList.remove("sustain-btn-clicked");
      }
    });

    slideLabal[index].classList.add("sustain-btn-clicked");
  });
});

// ----------------fetch the image for the feed section----------------

const feedButton = document.querySelector(".feed-btn");
let isLoad = false;
feedButton.addEventListener("click", function () {
  if (!isLoad) {
    feedButton.textContent = "load more";
    fetchImages(API_ENDPOINT);
    feedButton.textContent = "close";
    isLoad = true;
  } else {
    feedButton.textContent = "close";
    const parentContainer = document.querySelector(".feed-container");
    while (parentContainer.firstChild) {
      parentContainer.removeChild(parentContainer.lastChild);
    }
    feedButton.textContent = "load more";
    isLoad = false;
  }
  return;
});
//---------------- slider for the media mentions section ----------------
const mediaContainer = document.querySelector(".media");
const divContainer = document.querySelector(".overflow-hidden");
const mediumElments = document.querySelectorAll(".medium");
const vogueElement = document.querySelector(".vogue");
const mediumIndicators = document.querySelectorAll(".mentions input");
const divCenter = Math.ceil(divContainer.getBoundingClientRect().width / 2);

// get the index
mediumIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", function () {
    // get the mediaDiv at the index
    const selectedMedium = mediumElments[index + 2];

    const elementLocation = Math.ceil(
      selectedMedium.offsetLeft +
        selectedMedium.getBoundingClientRect().width / 2
    );
    // move to left by the mediaDivs[index].location - center
    let offset = Math.round(elementLocation - divCenter);

    offset = -offset;
    mediaContainer.style.transform = `translateX(${offset}px)`;
  });
});
