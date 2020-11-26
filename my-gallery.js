import galleryList from "./gallery-items.js"; 
console.log(galleryList);

const galleryRef = document.querySelector('.js-gallery');
const divRef = document.querySelector('.js-lightbox');
const modalref = document.querySelector('.lightbox__overlay');
const imgRef = document.querySelector('.lightbox__image');
const btnRef = document.querySelector('[data-action="close-lightbox"]');


 const newArr = galleryList.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description} /></a></li>`;
 }).join('');

 galleryRef.insertAdjacentHTML('afterbegin', newArr)
//  console.log(newArr);

galleryRef.addEventListener('click', (evt) => {
   evt.preventDefault();
   if (evt.target.nodeName !== 'IMG') {
      return;
   } 
      divRef.classList.add('is-open');
      imgRef.src = evt.target.getAttribute('data-source');
      imgRef.alt = evt.target.alt;
});

 
btnRef.addEventListener('click', closeLightBox);

modalref.addEventListener('click', closeLightBox);

function closeLightBox() {
   divRef.classList.remove('is-open');
   imgRef.src = "";
   imgRef.alt = "";
}
