var express = require('express');
var router = express.Router();
var control = require('../controller/controller.js');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   // res.send('respond with a resource');
//   res.render('index', { title: 'Users' });
// });

router.post('/report', control.report);

module.exports = router;
