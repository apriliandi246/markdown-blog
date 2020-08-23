'use strict';


const marked = require('marked');
const slugify = require('slugify');
const { JSDOM } = require('jsdom');
const mongoose = require('mongoose');
const createDomPurify = require('dompurify');
const dompurify = createDomPurify(new JSDOM().window);


const articleSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   tag: {
      type: String,
      required: true
   },
   markdown: {
      type: String,
      required: true
   },
   slug: {
      type: String,
      unique: true,
      required: true
   },
   sanitizedHtml: {
      type: String,
      required: true
   }
});


articleSchema.pre('validate', function (next) {
   if (this.title) {
      const title = slugify(this.title, {
         lower: true,
         strict: true
      });

      this.slug = `${title}-${this._id}`;
   }

   if (this.markdown) {
      this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
   }

   next();
});


module.exports = mongoose.model('Article', articleSchema);