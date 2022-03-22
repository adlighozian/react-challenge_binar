exports.home = (req,res) => {
    // const title = "Challenge-02 | Cars", menu = "CARS",list ="List Car";
    res.render('pages/dashboard', { title: 'Challenge-02 | Dashboard', menu: "DASHBOARD",list:"Dashboard" });
  };
  