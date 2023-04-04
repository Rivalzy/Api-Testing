const express = require('express');
const Controller = require('../controllers/homeController');

const router = express.Router();

router.get('/', Controller.getHome);

module.exports = router;
