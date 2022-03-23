exports.home = (req,res) => {
  // const title = "Challenge-02 | Cars", menu = "CARS",list ="List Car";
  res.render('pages/editcar', { title: 'Challenge-02 | editcar', menu: "CARS",list:"List Car" });
};
