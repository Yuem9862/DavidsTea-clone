const fetchImages = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setImages(data);
    return data;
  } catch (err) {
    alert(err);
  }
};

const setImages = ({ results }) => {
  //get the parentContainer
  const feedContainer = document.querySelector(".feed-container");

  //create the childContainer
  const imagesContainer = document.createElement("div");
  imagesContainer.setAttribute("class", "feed-imgs");
  feedContainer.appendChild(imagesContainer);
  //in the childContainer, create the image nodes

  for (let i = 0; i < 8; i++) {
    const {
      urls: { regular },
      alt_description,
    } = results[i];

    const imageElement = document.createElement("img");
    imageElement.setAttribute("class", "feed-img");
    imageElement.setAttribute("alt", alt_description);
    imageElement.setAttribute("src", regular);
    imagesContainer.appendChild(imageElement);
  }

  //create and append the disclaimer
  const disclaimerElement = document.createElement("p");
  disclaimerElement.setAttribute("class", "disclaimer");
  disclaimerElement.textContent = "*Powered by Unsplash";
  feedContainer.appendChild(disclaimerElement);
};
export default fetchImages;
