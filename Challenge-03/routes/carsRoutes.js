var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/cars', { title: 'Challenge-02 | Cars', menu: "CARS",list:"List Car" });
});

module.exports = router;
