const teaTypes = [
  {
    id: 1,
    name: "black",
    icon: "./img/tea-black.png",
    hover: "./img/tea-black-hover.png",
  },
  {
    id: 2,
    name: "herbal",
    icon: "./img/tea-herbal.png",
    hover: "./img/tea-herbal-hover.png",
  },
  {
    id: 3,
    name: "rooibos",
    icon: "./img/tea-rooibos.png",
    hover: "./img/tea-rooibos-hover.png",
  },
  {
    id: 4,
    name: "white",
    icon: "./img/tea-white.png",
    hover: "./img/tea-white-hover.png",
  },
  {
    id: 5,
    name: "matcha",
    icon: "./img/tea-matcha.png",
    hover: "./img/tea-matcha-hover.png",
  },
  {
    id: 6,
    name: "green",
    icon: "./img/tea-green.png",
    hover: "./img/tea-green-hover.png",
  },
  {
    id: 7,
    name: "oolong",
    icon: "./img/tea-oolong.png",
    hover: "./img/tea-oolong-hover.png",
  },
  {
    id: 8,
    name: "maté",
    icon: "./img/tea-mate.png",
    hover: "./img/tea-mate-hover.png",
  },
  {
    id: 9,
    name: "puerh",
    icon: "./img/tea-puerh.png",
    hover: "./img/tea-puerh-hover.png",
  },
];

const setTeaTypes = function () {
  const teaTypesContainer = document.querySelector(".tea-types");

  teaTypes.forEach((teaType, index) => {
    const articleElement = document.createElement("article");
    const teaImage = document.createElement("img");
    const shadowImage = document.createElement("img");
    const teaButton = document.createElement("a");

    if (index % 2 === 0) {
      articleElement.setAttribute("class", "tea-type");
    } else {
      articleElement.setAttribute("class", "tea-type odd");
    }

    teaImage.setAttribute("src", teaType.icon);
    teaImage.setAttribute("alt", teaType.name);
    teaImage.setAttribute("style", "z-index:1");

    shadowImage.setAttribute("src", "./img/shadow.png");
    shadowImage.setAttribute("class", "tea-shadow ");

    teaButton.setAttribute("class", "btn tea-btn");
    teaButton.textContent = teaType.name;

    articleElement.appendChild(teaImage);
    articleElement.appendChild(shadowImage);
    articleElement.appendChild(teaButton);

    teaTypesContainer.appendChild(articleElement);
    articleElement.addEventListener("mouseenter", function () {
      teaImage.setAttribute("src", teaType.hover);
    });
    articleElement.addEventListener("mouseleave", function () {
      teaImage.setAttribute("src", teaType.icon);
    });
  });
};

export { setTeaTypes };
