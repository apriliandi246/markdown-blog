const express = require('express');
const methodOverride = require('method-override');


module.exports = function (app) {
      app.disable('etag');
      app.disable('x-powered-by');

      app.use(express.urlencoded({
            extended: false
      }));
      app.use(methodOverride('_method'));

      //routes
      app.use('/', require('../routes/index'));
      app.use('/article', require('../routes/article'));

      app.use((req, res, next) => {
            res.redirect('/');
      });
}