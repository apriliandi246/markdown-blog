const express = require('express');
const Article = require('../models/article');
const router = express.Router();


// GET : new article
router.get('/new', (req, res) => {
     res.render('article/new_article', {
          article: new Article
     });
});


// GET : detail article
router.get('/detail/:slug', async (req, res) => {
     const article = await Article.findOne({
          slug: req.params.slug
     });

     if (article === null) return res.redirect('/');

     res.render('article/detail', {
          article
     });
});


// GET : edit article
router.get('/edit/:id', async (req, res) => {
     const article = await Article.findById(req.params.id);

     res.render('article/edit_article', {
          article
     });
});



// POST : new article
router.post('/new', (req, res, next) => {
     req.article = new Article();
     next();
}, saveArticleAndRedirect());



// PUT : edit article
router.post('/edit/:id', async (req, res, next) => {
     req.article = await Article.findById(req.params.id);
     next();
}, saveArticleAndRedirect());



// DELETE : article
router.post('/delete/:id', async (req, res) => {
     await Article.findByIdAndDelete(req.params.id)
     res.redirect('/');
});



function saveArticleAndRedirect() {
     return async (req, res) => {
          let article = req.article;
          article.title = req.body.title;
          article.description = req.body.description;
          article.markdown = req.body.markdown;

          try {
               article = await article.save();
               res.redirect(`/article/detail/${article.slug}`);

          } catch (e) {
               res.redirect('/');
          }
     }
}


module.exports = router;