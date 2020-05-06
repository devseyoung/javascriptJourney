/* eslint-disable no-console */
function Gallery(gallery) {
   if (!gallery) {
      throw new Error('No GAllery Found!');
   }
   // select the elements we need
   const images = Array.from(gallery.querySelectorAll('img'));
   //  console.log(images);
   const modal = document.querySelector('.modal');
   const prevButton = modal.querySelector('.prev');
   const nextButton = modal.querySelector('.next');

   let currentImage;

   function openModal() {
      console.info('Opening Modal...');
      // first check if the modal is already open because of animation
      if (modal.matches('.open')) {
         console.info('Modal already open');
         return;
      }
      modal.classList.add('open');

      // Event listners to be bound when we open the modal
      window.addEventListener('keyup', handleKeyUp);
      nextButton.addEventListener('click', showNextImage);
      prevButton.addEventListener('click', showPrevImage);
   }

   function closeModal() {
      modal.classList.remove('open');
      // TODO: add event Listener for clicks and keyboard..
      window.removeEventListener('keyup', handleKeyUp);
      prevButton.removeEventListener('click', showPrevImage);
   }

   function handleClickOutside(e) {
      if (e.target === e.currentTarget) {
         closeModal();
      }
   }
   function handleKeyUp(event) {
      if (event.key === 'Escape') return closeModal();
      if (event.key === 'ArrowRight') return showNextImage();
      if (event.key === 'ArrowLeft') return showPrevImage();
   }

   function showNextImage() {
      showImage(currentImage.nextElementSibling || gallery.firstElementChild);
   }

   function showPrevImage() {
      showImage(currentImage.previousElementSibling || gallery.lastElementChild);
   }

   function showImage(el) {
      if (!el) {
         console.info('no image to show');
         return;
         // for safety
      }
      // updage the modal with this info
      console.log(el);
      modal.querySelector('img').src = el.src;
      modal.querySelector('img').textContent = el.title;
      modal.querySelector('figure p').textContent = el.dataset.description;
      currentImage = el;
      openModal();
   }
   // These are our Event Listeners!

   images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));

   // loop over each image
   images.forEach(image =>
      // attach an event listener for each image
      image.addEventListener('keyup', e => {
         // when that is keyup'd, check if it was enter
         if (e.key === 'Enter') {
            // if it was, show that iamge
            showImage(e.currentTarget);
         }
      })
   );
   modal.addEventListener('click', handleClickOutside);
}

// Use it on the Page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
