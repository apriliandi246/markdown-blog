"use strict";

const express = require('express');
const Article = require('../models/article');
const moment = require('moment');
const router = express.Router();



// get make new article page
router.get('/new', (req, res) => {
    res.render('article/new_article', {
        article: new Article
    });
});



// detail article page
router.get('/detail/:slug', async (req, res) => {
    const article = await Article.findOne({
        slug: req.params.slug
    });

    if (article === null) {
        res.redirect('/');

    } else {
        res.render('article/detail_article', {
            article,
            formatDate
        });
    }
});



// get edit article page
router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);

    res.render('article/edit_article', {
        article
    });
});



// get article tag
router.get('/tag/:tag', async (req, res) => {
    const articles = await Article.find({
        tags: {
            $all: [req.params.tag]
        }
    }).sort({
        createdAt: 'desc'
    });

    res.render('article/tag_article', {
        articles,
        formatDate,
        tag: req.params.tag
    });
});



// post new article
router.post('/new', (req, res, next) => {
    req.article = new Article();
    next();
}, saveArticleAndRedirect());



// edit article
router.put('/edit/:id', async (req, res, next) => {
    req.article = await Article.findById(req.params.id);
    next();
}, saveArticleAndRedirect());



// delete article the article
router.delete('/delete/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/');
});



// function for post and put article
function saveArticleAndRedirect() {
    return async (req, res) => {
        let article = req.article;

        article.title = req.body.title;
        article.tags = req.body.tags.split(',');
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



// function to make format date
function formatDate(date) {
    return moment(date).format('ll');
}



module.exports = router;