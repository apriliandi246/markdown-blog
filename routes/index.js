const express = require('express');
const Article = require('../models/article');
const router = express.Router();


// GET
router.get('/', async (req, res) => {
     const articles = await Article.find().sort({
          createdAt: 'desc'
     });

     res.render('index', {
          articles
     });
});


module.exports = router;