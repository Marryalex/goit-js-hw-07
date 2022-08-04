import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImage(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick)

function createImage(galleryItems) {
    return galleryItems.map((item) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    })
        .join('')
};

function onGalleryContainerClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
            {
                onClose: (instance) => {
                    window.removeEventListener("keydown", onPressKeyEsc);
                }
            }
        )
        instance.show()
        window.addEventListener("keydown", onPressKeyEsc)
        function onPressKeyEsc(event) {
            if (event.code === "Escape") {
                instance.close()
            }
        }
    }
}
