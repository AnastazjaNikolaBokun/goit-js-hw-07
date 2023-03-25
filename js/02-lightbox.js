import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const imageList = galleryItems
  .map(
    (item) =>
      `<li><a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", imageList);

const link = document.querySelectorAll(".gallery__item");

link.forEach(function (element) {
  function modal(event) {
    event.preventDefault();
    var lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionPosition: "outside",
      captionDelay: 250,
    });
  }
  element.addEventListener("click", modal);
});

console.log(galleryItems);
