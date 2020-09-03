const collapseButton = document.querySelector('.collapse__button');
const icon = document.querySelector('.collapse-button__icon');


collapseButton.addEventListener('click', () => {
   const collapseContent = collapseButton.nextElementSibling;

   collapseButton.classList.toggle('collapse__button-active');

   if (collapseContent.style.display === 'block') {
      icon.innerText = '+';
      collapseContent.style.display = 'none';

   } else {
      icon.innerText = '-';
      collapseContent.style.display = 'block'
   }
});
