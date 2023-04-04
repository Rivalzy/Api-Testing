const express = require('express');
const Controller = require('../controllers/adminController');

const router = express.Router();

router.get('/admin', Controller.getAdmin);

module.exports = router;
