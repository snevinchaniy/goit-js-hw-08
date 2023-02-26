import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class = 'gallery__item' href = '${original}'>
      <img class = 'gallery__image' src = '${preview}' alt = '${description}'>
      </a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', createGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// console.log(galleryItems);
