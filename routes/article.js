const express = require('express');
const {
      render_new_article_page,
      render_detail_aticle_page,
      render_edit_article_page
} = require('../controllers/article');
const router = express.Router();



// GET : new article
router.get('/new', render_new_article_page);


// GET : detail article
router.get('/detail/:slug', render_detail_aticle_page);


// GET : edit artcle
router.get('/edit/:id', render_edit_article_page);


// POST : new article
router.post('/new', );


module.exports = router;