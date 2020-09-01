'use strict';


const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const methodOverride = require('method-override');
const expressLayout = require('express-ejs-layouts');
const app = express();


// database
require('./startup/db')();


app.disable('etag');
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


// routes and others
require('./startup/routes')(app);


app.listen(8000, () => {
   console.log(`Server started on 8000...`);
});