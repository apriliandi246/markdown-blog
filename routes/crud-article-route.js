'use strict';

const express = require('express');
const Article = require('../models/article');
const router = express.Router();


// make new article page
router.get('/new', (req, res) => {
   res.render('article/new-article', {
      article: new Article
   });
});


// get edit article page
router.get('/edit/:id', async (req, res) => {
   const article = await Article.findById(req.params.id);

   res.render('article/edit-article', {
      article
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

      article.title = req.body.title;
      article.tag = req.body.tag;
      article.markdown = req.body.markdown;

      try {
         article = await article.save();
         res.redirect(`/${article.slug}`);

      } catch (e) {
         res.redirect('/');
      }
   }
}


module.exports = router;