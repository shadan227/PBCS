var express = require('express');
var router = express.Router();
var control = require('../APIController/controller.js');

router.get('/front', control.front);

router.post('/repo', control.reprt);

router.post('/fdback', control.feedbk);

router.post('/key_info', control.key_info);

router.post('/key_i', control.key_i);

router.post('/filter', control.filter);

router.post('/filter1', control.filter1);

router.post('/filter2', control.filter2);

router.post('/search', control.search);

router.post('/compItems', control.compItems);

module.exports = router;
