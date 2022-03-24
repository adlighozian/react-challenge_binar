// exports.home = (req,res) => {
//   res.render('pages/car', { title: 'Challenge-02 | Cars', menu: "CARS",list:"List Car" });
// };

const car = require('../models/carModel.json')

module.exports = {
    index: (req, res) => {
        const locals = {
            data: {
                posts: car
            },
            contentName: 'Post'
        }
        res.render('pages/car', locals)
    }
}