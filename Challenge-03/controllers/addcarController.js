const car = require('../models/carModel.json')

module.exports = {
    postItem: (req, res)=> {
        console.log(req.body)
        car.push(req.body);
        res.redirect("/cars");
    }
}