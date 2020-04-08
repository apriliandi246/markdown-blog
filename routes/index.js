"use strict";

const express = require('express');
const Article = require('../models/article');
const moment = require('moment');
const router = express.Router();


// main page
router.get('/', async (req, res) => {
     const articles = await Article.find().sort({
          createdAt: 'desc'
     });

     function formatDate(date) {
          return moment(date).format('ll');
     }

     res.render('index', {
          articles,
          formatDate
     });
});


module.exports = router;