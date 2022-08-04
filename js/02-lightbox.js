import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImage(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function createImage(galleryItems) {
    return galleryItems.map((item) => {
        return `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`
})
.join('')
};
let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});