import galleryList from "./gallery-items.js"; 
console.log(galleryList);

const galleryItemRef = document.querySelector('.js-gallery');


let newArr = galleryList.map(({ preview, original, description }) => {
   return `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description} /></a></li>`;
}).join('');

galleryItemRef.innerHTML = newArr;
console.log(newArr);
console.log(galleryItemRef);






