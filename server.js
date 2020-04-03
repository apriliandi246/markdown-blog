"use strict";

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();


// database
require('./startup/db')();


// set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));


// routes and others
require('./startup/main')(app);


app.listen(8000, () => {
      console.log(`Server started on 8000...`);
});