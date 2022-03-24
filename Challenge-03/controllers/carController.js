const car = require('../models/carModel.json')

module.exports = {
    index: (req, res) => {
        const locals = {
            data: {
                posts: car
            },
            title: 'Challenge-03 | Cars', 
            menu: "CARS",
            list:"List Car"
        }
        res.render('pages/car', locals);
    }
}