document.addEventListener('DOMContentLoaded', () => {
   const links = document.querySelectorAll('.article-body a');

   for (let index = 0; index < links.length; index++) {
      links[index].target = '_blank';
   }

   document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
   });
});