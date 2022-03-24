const express = require('express');
const router = express.Router()
const carPage = require ("../controllers/carController");

// GET page
router.get("/editcar",function(req, res, next) {
    res.render('pages/editcar', { title: 'Challenge-03 | Editcar', menu: "CARS",list:"List Car" });
  });

router.get("/",function(req, res, next) {
    res.render('pages/login', { title: 'Challenge-03 | Login'});
  });

router.get("/dashboard",function(req, res, next) {
    res.render('pages/dashboard', { title: 'Challenge-03 | Dashboard', menu: "DASHBOARD",list:"Dashboard" });
  });

router.get("/addcar",function(req, res, next) {
    res.render('pages/addcar', { title: 'Challenge-03 | Addcar', menu: "CARS",list:"List Car" });
  });

// router.get("/cars",function(req, res, next) {
//     res.render('pages/car', { title: 'Challenge-03 | Cars', menu: "CARS",list:"List Car" });
//   });
  

router.get('/cars', carPage.index)

module.exports = router;