exports.register = async (req, res, next) => {
  passport.authenticate(
    "register",
    { session: false },
    async (err, use, info) => {
      if (user) {
        res.status(200).json({
          message: "Registrasi Berhasil",
          user: user,
        });
      } else {
        res.status(200).json({
          message: "Email sudah terdaftar",
        });
      }
    }
  )(req, res, next);
};