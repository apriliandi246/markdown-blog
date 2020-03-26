const express = require('express');
const {
      render_new_article_page
} = require('../controllers/article');
const router = express.Router();


// GET
router.get('/new', render_new_article_page);


module.exports = router;