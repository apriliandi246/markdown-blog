'use strict';


const mongoose = require('mongoose');


module.exports = () => {
   mongoose.connect('mongodb://localhost/project-2', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
   })
      .then(() => console.log('Connect to MongoDB...'))
      .catch(err => console.log('Something wrong : ', err));
}