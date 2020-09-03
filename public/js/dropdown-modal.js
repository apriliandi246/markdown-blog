// dropdown
const dropdownBtn = document.querySelector('.dropdown__button');
const dropdownContent = document.querySelector('.dropdown__content');


// modal
const modal = document.querySelector('.modal-delete');
const modalBtnCancel = document.querySelector('.modal-delete .modal .modal-footer button.cancel-btn');
const modalBtnDelete = document.querySelector('.dropdown__delete-button');


// show the dropdown
dropdownBtn.addEventListener('click', () => {
   if (dropdownContent.style.display === '' || dropdownContent.style.display === 'none') {
      setStatusDisplay(dropdownContent, 'block');
      setElementColor(dropdownBtn, '#8a2be2');
   } else {
      setStatusDisplay(dropdownContent, 'none');
      setElementColor(dropdownBtn, '#ffffff');
   }
});


// hide the dropdown when user click in anywhere
window.addEventListener('click', (event) => {
   if (event.target !== dropdownBtn) {
      setStatusDisplay(dropdownContent, 'none');
      setElementColor(dropdownBtn, '#ffffff');
   }
});


// show the modal
modalBtnDelete.addEventListener('click', () => {
   setStatusDisplay(dropdownContent, 'none');
   setStatusDisplay(modal, 'block');
   setElementColor(dropdownBtn, '#ffffff');
});


// hide the modal
modalBtnCancel.addEventListener('click', () => {
   setStatusDisplay(modal, 'none');
});


// set display status
function setStatusDisplay(element, status) {
   element.style.display = status;
}

// set font color
function setElementColor(element, color) {
   element.style.color = color
}