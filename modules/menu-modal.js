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

const modalList = document.querySelector(".menu-modal");

const setModal = function () {
  modalList.innerHTML = menuItems
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

export default setModal;
