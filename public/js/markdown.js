document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.article-body a').forEach((anchorTag) => {
      anchorTag.target = '_blank';
   });

   document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
   });
});