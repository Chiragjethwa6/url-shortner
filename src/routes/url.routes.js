const express = require('express');
const { createShortCode, redirectUrl, getUrls } = require('../controllers/url.controller');
const router = express.Router();

router.post('/shorten', createShortCode);
router.get('/:shortCode', redirectUrl);

module.exports = router;