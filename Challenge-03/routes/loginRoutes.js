var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/login', { title: 'Challenge-02 | Login' });
});

module.exports = router;
