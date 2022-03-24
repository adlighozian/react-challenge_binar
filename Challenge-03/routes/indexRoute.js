const express = require('express');
const router = express.Router()
const carPage = require ("../controllers/carController");

// GET page
router.get("/editcar",function(req, res, next) {
    res.render('pages/editcar', { title: 'Challenge-02 | Editcar', menu: "CARS",list:"List Car" });
  });

router.get("/",function(req, res, next) {
    res.render('pages/login', { title: 'Challenge-02 | Login'});
  });

router.get("/dashboard",function(req, res, next) {
    res.render('pages/dashboard', { title: 'Challenge-02 | Dashboard', menu: "DASHBOARD",list:"Dashboard" });
  });

router.get("/addcar",function(req, res, next) {
    res.render('pages/addcar', { title: 'Challenge-02 | Addcar', menu: "CARS",list:"List Car" });
  });

router.get("/cars",function(req, res, next) {
    res.render('pages/car', { title: 'Challenge-02 | Cars', menu: "CARS",list:"List Car" });
  });
  
// router.get("/cars",carPage.index);


module.exports = router;