'use strict';

const router = require('express').Router();
const Time = require('../helper/time');
const Article = require('../models/article');


// detail article page
router.get('/:slug', async (req, res) => {
   const articleId = req.params.slug.split('-');
   const article = await Article.findById(articleId[articleId.length - 1]);

   if (article === null) {
      res.redirect('/');

   } else {
      res.render('article/detail-article', {
         article,
         formatDate
      });
   }
});


function formatDate(date) {
   const time = new Time(date);
   return time.format('medium');
}


module.exports = router;
