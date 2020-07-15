// for styling code
document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
   });
});


// make link tag target blank
const link = document.querySelectorAll('.article-body a');

for (let i = 0; i < link.length - 1; i++) {
   link[i].target = '_blank';
}


// delete article menu and make modal
const modal = document.querySelector('.modal-delete');

// show the modal
document.querySelector('nav .dropdown .dropdown-content button.delete-article').addEventListener('click', () => {
   modal.style.display = 'block';
});

// hide the modal
document.querySelector('.modal-delete .modal .modal-footer button.cancel-btn').addEventListener('click', () => {
   modal.style.display = 'none';
});