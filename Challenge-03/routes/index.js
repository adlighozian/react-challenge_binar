const express = require('express');
const router = express.Router()

const car = require("./carRoutes")
const login = require("./loginRoutes")
const dashboard = require("./dashboardRoutes")
const addcar = require("./addcarRoutes")

router.use(car);
router.use(login);
router.use(dashboard);
router.use(addcar);

module.exports = router;