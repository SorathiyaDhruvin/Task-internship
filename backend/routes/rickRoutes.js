const express = require('express');
const router = express.Router();
const rickController = require('../controllers/rickController');

router.get('/character', rickController.getRandomCharacter);

module.exports = router;
