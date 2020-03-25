const express = require('express');
const {
      render_main_page
} = require('../controllers/index');
const router = express.Router();


// GET
router.get('/', render_main_page);


module.exports = router;