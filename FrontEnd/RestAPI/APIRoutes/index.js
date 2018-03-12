// console.log("Rest API ROUTE");

var express = require('express');
var router = express.Router();
var control = require('../APIController/controller.js');

router.get('/front', control.front);

router.post('/repo', control.reprt);

router.post('/fdback', control.feedbk);

router.post('/key_info', control.key_info);

router.post('/filter', control.filter);

module.exports = router;
