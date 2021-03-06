'use strict';

const router = require('express').Router();
const Time = require('../helper/time');
const Article = require('../models/article');


// main page
router.get('/', async (req, res) => {
   const articles = await Article.find().sort({
      createdAt: 'desc'
   });

   res.render('index', {
      articles,
      formatDate
   });
});


function formatDate(date) {
   const time = new Time(date);
   return time.format('medium');
}


module.exports = router;
