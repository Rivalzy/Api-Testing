const express = require('express');
const Controller = require('../controllers/userController');

const router = express.Router();

router.get('/user', Controller.getUser);

module.exports = router;
