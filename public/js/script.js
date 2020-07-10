// for code line in article (library hightlight.js)
document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
   });
});