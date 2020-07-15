'use strict';


const express = require('express');
const Time = require('../helper/time');
const Article = require('../models/article');
const router = express.Router();


// make new article page
router.get('/new', (req, res) => {
   res.render('article/new-article', {
      article: new Article
   });
})


// detail article page
router.get('/detail/:slug', async (req, res) => {
   const article = await Article.findOne({
      slug: req.params.slug
   });

   if (article === null) {
      res.redirect('/');

   } else {
      res.render('article/detail-article', {
         article,
         formatDate
      });
   }
});


// get edit article page
router.get('/edit/:id', async (req, res) => {
   const article = await Article.findById(req.params.id);

   res.render('article/edit-article', {
      article
   });
});


// get article tag
router.get('/tag/:tag', async (req, res) => {
   const articles = await Article.find({
      tags: { $all: [req.params.tag] }
   }).sort({
      createdAt: 'desc'
   });

   res.render('article/tag-article', {
      articles,
      formatDate,
      tag: req.params.tag
   });
});


// post new article
router.post('/new', (req, res, next) => {
   req.article = new Article();
   next();
}, saveArticle());


// edit article
router.put('/edit/:id', async (req, res, next) => {
   req.article = await Article.findById(req.params.id);
   next();
}, saveArticle());


// delete article the article
router.delete('/delete/:id', async (req, res) => {
   await Article.findByIdAndDelete(req.params.id)
   res.redirect('/');
});


// function for post and put article
function saveArticle() {
   return async (req, res) => {
      let article = req.article;

      article.title = req.body.title.charAt(0).toUpperCase() + req.body.title.slice(1);
      article.tags = req.body.tags.toLowerCase().split(',');
      article.markdown = req.body.markdown;

      try {
         await article.save();
         res.redirect(`/article/detail/${article.slug}`);

      } catch (e) {
         res.redirect('/');
      }
   }
}


function formatDate(date) {
   const time = new Time(date);
   return time.format('medium');
}


module.exports = router;