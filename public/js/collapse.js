const collapseButton = document.querySelector('.collapse-button');
const icon = document.querySelector('.collapse-button .collapse-icon');


collapseButton.addEventListener('click', () => {
   const collapseContent = collapseButton.nextElementSibling;

   collapseButton.classList.toggle('active');

   if (collapseContent.style.display === 'block') {
      icon.innerText = '+';
      collapseContent.style.display = 'none';

   } else {
      icon.innerText = '-';
      collapseContent.style.display = 'block'
   }
});
