const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { getDB } = require("./dbConnection");

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const db = getDB();
        const exixtingUser = await db
          .collection("users")
          .findOne({ username: email });

        if (!exixtingUser) {
          const encryptedPassword = await bcrypt.hash(password, 10);
          const data = {
            username: email,
            password: encryptedPassword,
            createdAt: new Date(Date.now()).toISOString,
            updatedAt: new Date(Date.now()).toISOString,
          };
          const user = await db.collection("users").insertOne(data);
          return done(null, user);
        }
        return done(null, false, { message: "User already registered" });
      } catch (error) {
        done(error);
      }
    }
  )
);
