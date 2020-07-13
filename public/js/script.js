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