const express = require('express');


module.exports = function (app) {
      app.use(express.urlencoded({
            extended: false
      }));

      app.disable('etag');
      app.disable('x-powered-by');

      //routes
      app.use('/', require('../routes/index'));
      app.use('/article', require('../routes/article'));
}