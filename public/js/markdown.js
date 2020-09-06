document.addEventListener('DOMContentLoaded', () => {
   const tables = document.getElementsByTagName('table');
   const parent = document.querySelector('.article__body');

   for (let index = 0; index < tables.length; index++) {
      const parentTable = document.createElement('div');
      const nextEl = tables[index].nextElementSibling;

      parentTable.classList.add('table-body');
      parentTable.style.marginTop = '50px';
      parentTable.append(tables[index]);

      parent.insertBefore(parentTable, nextEl);
   }

   document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
   });
});
