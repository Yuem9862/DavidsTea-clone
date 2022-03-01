const policies = [
  {
    id: 1,
    promo: "Free shipping sitewide over $50",
    url: "https://www.davidstea.com/ca_en/sale/shop-all-sale/",
  },
  {
    id: 2,
    promo: "Check Your Order Status 🚛 📦",
    action: "hide",
    url: "https://www.davidstea.com/ca_en/orderstatus/",
  },
  {
    id: 3,
    promo: "Get up to 50% OFF select items",
    url: "https://www.davidstea.com/ca_en/sale/shop-all-sale/",
  },
];

const policiesContainer = document.querySelector(".policies");

const setPolicies = function () {
  //map out the policies
  policiesContainer.innerHTML = policies
    .map(({ promo, action, url }, slideIndex) => {
      let position = "next";
      if (slideIndex === 0) {
        position = "active";
      }
      if (slideIndex === policies.length - 1) {
        position = "last";
      }
      return `<div class="policy ${position}">
            <div class="policy-wrapper">
              <a href=${url} >
                ${promo} <span ${
        action ? `class = "hide"` : `class = "policy-span"`
      }>shop now</span>
              </a>
            </div>
            </div>`;
    })
    .join("");

  //set up the slider
  const startSlider = () => {
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");
    let next = active.nextSibling;

    if (!next) {
      next = policiesContainer.firstElementChild;
    }

    active.classList.remove(["active"]);
    last.classList.remove(["last"]);
    next.classList.remove(["next"]);

    active.classList.add("last");
    last.classList.add("next");
    next.classList.add("active");
  };

  window.setInterval(startSlider, 8000);
};

export default setPolicies;
