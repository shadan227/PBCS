var express = require('express');
var router = express.Router();
var control = require('../controller/controller.js');

/* GET home page. */
router.get('/', control.front1);

router.get('/:page', control.front);

router.get('/pro/:KEY', control.key_info);

router.post('/fk', control.feed);

router.post('/filter',control.filter);

router.post('/search', control.search);

router.post('/ajo', control.key_i);

router.post('/compItems', control.compItems);

module.exports = router;
