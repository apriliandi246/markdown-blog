'use strict';


module.exports = function (app) {
   app.use('/', require('../routes/index'));
   app.use('/article', require('../routes/article'));

   app.use((req, res, next) => {
      res.redirect('/');
   });
}