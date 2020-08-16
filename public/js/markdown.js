// for code format
document.addEventListener('DOMContentLoaded', () => {
   const anchorTag = document.querySelectorAll('.article-body a');

   for (let i = 0; i < anchorTag.length - 1; i++) {
      anchorTag[i].target = '_blank';
   }

   document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
   });
});