exports.home = (req,res) => {
    // const title = "Challenge-02 | Cars", menu = "CARS",list ="List Car";
    res.render('pages/addcar', { title: 'Challenge-02 | addcar', menu: "CARS",list:"List Car" });
  };
  