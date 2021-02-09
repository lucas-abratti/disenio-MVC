const express = require('express');
const controller = require('../controllers/main.js');

const router = express.Router();

router.get('/', controller.home);
router.get('/about', controller.about);
router.get('/practica', controller.practica);


module.exports = router;