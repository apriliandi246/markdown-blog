const express = require('express');
const methodOverride = require('method-override');


module.exports = function (app) {
      app.use(express.urlencoded({
            extended: false
      }));
      app.use(methodOverride('_method'));

      app.disable('etag');
      app.disable('x-powered-by');

      //routes
      app.use('/', require('../routes/index'));
      app.use('/article', require('../routes/article'));

      app.use(function (req, res, next) {
            res.redirect('/');
      });
}