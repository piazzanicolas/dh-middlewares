// ************ Require's ************
const express = require('express');
const router = express.Router();
const admin = require ('../middlewares/admin')

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/contact', mainController.contact);
router.get('/faq', mainController.faq);
router.get('/admin', admin, mainController.admin);

module.exports = router;
