'use strict';


module.exports = function (app) {
   app.use('/', require('../routes/index'));
   app.use('/', require('../routes/detail-article-routes'));
   app.use('/tag', require('../routes/tag-article-route'));
   app.use('/article', require('../routes/crud-article-route'));

   app.use((req, res, next) => {
      res.redirect('/');
   });
}