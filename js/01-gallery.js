import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const imageList = galleryItems
  .map(
    (item) =>
      `<li><div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", imageList);

const link = document.querySelectorAll(".gallery__link");

link.forEach(function (element) {
  function modal(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${element}" width="800" height="600"/>
`);

    instance.show();
    {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          instance.close();
        }
      });
    }
  }
  element.addEventListener("click", modal);
});
