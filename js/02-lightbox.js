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
  element.addEventListener("click", modal);
});

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "outside",
  captionDelay: 250,
});

function modal(event) {
  event.preventDefault();
  lightbox.on("show.simplelightbox");
}

console.log(galleryItems);
