// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pages/addcar', { title: 'Challenge-02 | addCars', menu: "CARS",list:"List Car" });
// });

// module.exports = router;

const router = require("express").Router();
const page = require ("../controllers/addcarController");

router.get("/addcar",page.home);
module.exports = router;