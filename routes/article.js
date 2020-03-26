const express = require('express');
const {
      render_new_article_page,
      render_detail_aticle_page
} = require('../controllers/article');
const router = express.Router();


// GET : new article
router.get('/new', render_new_article_page);


// GET : detail article
router.get('/detail', render_detail_aticle_page);


module.exports = router;