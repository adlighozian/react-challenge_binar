exports.home = (req,res) => {
  // const title = "Challenge-02 | Cars", menu = "CARS",list ="List Car";
  res.render('pages/car', { title: 'Challenge-02 | Cars', menu: "CARS",list:"List Car" });
};
