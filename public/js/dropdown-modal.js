const modal = document.querySelector('.modal-delete');
const dropdownBtn = document.querySelector('button.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const modalBtnCancel = document.querySelector('.modal-delete .modal .modal-footer button.cancel-btn');
const modalBtnDelete = document.querySelector('nav .dropdown .dropdown-content button.delete-article');

dropdownBtn.addEventListener('click', () => {
   if (dropdownContent.style.display === '' || dropdownContent.style.display === 'none') {
      setStatusDisplay(dropdownContent, 'block');
      setElementColor(dropdownBtn, 'blueviolet');
   } else {
      setStatusDisplay(dropdownContent, 'none');
      setElementColor(dropdownBtn, 'white');
   }
});

// show the modal
modalBtnDelete.addEventListener('click', () => {
   setStatusDisplay(dropdownContent, 'none');
   setStatusDisplay(modal, 'block');
   setElementColor(dropdownBtn, 'white');
});

// hide the modal
modalBtnCancel.addEventListener('click', () => {
   setStatusDisplay(modal, 'none');
});


function setStatusDisplay(element, status) {
   element.style.display = status;
}

function setElementColor(element, color) {
   element.style.color = color
}