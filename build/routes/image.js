"use strict";
const express = require('express');
const router = express.Router();
const { resizeImage } = require('../controllers/image.ts');
router.get('/', resizeImage);
module.exports = router;
