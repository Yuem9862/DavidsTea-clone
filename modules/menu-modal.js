const menuItems = [
  { key: 1, page: "tea" },
  { key: 2, page: "wellness" },
  { key: 3, page: "matcha" },
  { key: 4, page: "subscription" },
  { key: 5, page: "teaware" },
  { key: 6, page: "gifts" },
  { key: 7, page: "sale" },
  { key: 8, page: "frequent steeper" },
];

const setLinks = function () {
  const linkContainer = document.querySelector(".links");
  linkContainer.innerHTML = menuItems
    .map(({ page }) => {
      if (page === "sale") {
        return `<li>
  <a href="#" class="link" style="color:red"}>${page}</a>
</li>`;
      } else {
        return `<li>
  <a href="#" class="link">${page}</a>
</li>`;
      }
    })
    .join("");
};
const setModal = function () {
  const modalContainer = document.querySelector(".menu-modal");
  // set the height of the modal container
  const modalHeight = `${menuItems.length * 3}rem`;
  modalContainer.style.height = modalHeight;

  //map each of the menu items
  modalContainer.innerHTML = menuItems
    .map(({ page }) => {
      return ` <li>
          <div class="menu-modal-item">
            <h3>${page}</h3>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </li>`;
    })
    .join("");
};

export { setLinks, setModal };
