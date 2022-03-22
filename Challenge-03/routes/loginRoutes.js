// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pages/login', { title: 'Challenge-02 | Login' });
// });

// module.exports = router;

const router = require("express").Router();
const page = require ("../controllers/loginController");

router.get("/",page.home);
module.exports = router;
