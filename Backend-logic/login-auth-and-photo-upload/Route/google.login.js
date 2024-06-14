const express = require("express");
const googleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const passport = require("passport");
require("dotenv").config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const googleRoute = express.Router();

passport.use(
  new googleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/login/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

googleRoute.use(
  session({ secret: "secret", resave: false, saveUninitialized: true })
);
googleRoute.use(passport.initialize());
googleRoute.use(passport.session());

googleRoute.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="/login/auth/google">Login with Google</a>');
});

googleRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

googleRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/login/profile");
  }
);

googleRoute.get("/profile", (req, res) => {
    console.log({user:res.user});
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.send(`
   <div>
    <h1>Profile</h1>
    <p>Name: ${req.user.displayName}</p>
    <p>Email: ${req.user.emails[0].value}</p>
    <a href="/login/logout" class="button">Logout</a>
</div>
    `);
});

googleRoute.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect("/login");
  });
});

module.exports = googleRoute;
