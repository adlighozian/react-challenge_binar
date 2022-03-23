const express = require('express');
const router = express.Router()

const car = require("./carRoute")
const login = require("./loginRoute")
const dashboard = require("./dashboardRoute")
const addcar = require("./addcarRoute")
const editcar = require("./editcarRoute")

router.use(car);
router.use(login);
router.use(dashboard);
router.use(addcar);
router.use(editcar);

module.exports = router;