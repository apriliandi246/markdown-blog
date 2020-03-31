// for code line in article (library hightlight.js)
document.addEventListener('DOMContentLoaded', (event) => {
      document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
      });
});