var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/addcar', { title: 'Challenge-02 | addCars', menu: "CARS",list:"List Car" });
});

module.exports = router;
