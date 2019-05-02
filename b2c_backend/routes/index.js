var express = require('express');
var router = express.Router();

const indexCtrl = require('../controller/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/code_challenge', indexCtrl.codeChallenge);

module.exports = router;
