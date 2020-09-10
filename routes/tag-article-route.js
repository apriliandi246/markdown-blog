'use strict';

const router = require('express').Router();
const Time = require('../helper/time');
const Article = require('../models/article');


// get article tag
router.get('/:tag', async (req, res) => {
   const articles = await Article.find({
      tag: req.params.tag
   }).sort({
      createdAt: 'desc'
   });

   res.render('article/tag-article', {
      articles,
      formatDate,
      tag: req.params.tag
   });
});


function formatDate(date) {
   const time = new Time(date);
   return time.format('medium');
}


module.exports = router;
