const express = require('express');
const Controller = require('../controllers/homeController');
const sans = require('../controllers/homeController');

const router = express.Router();

router.get('/', Controller.getHome);
router.get('/logout', Controller.getLogOut);

module.exports = router;
