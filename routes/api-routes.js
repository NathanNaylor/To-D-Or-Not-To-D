// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.sendStatus(403);
      return;
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // ROUTE TO POST CHARACTER DATA
  app.post("/api/member/generator", function(req, res) {
    if (!req.user) {
      res.sendStatus(403);
      return;
    }
    db.Character.create({
      UserId: req.user.id,
      name: req.body.name,
      race: req.body.race,
      characterClass: req.body.characterClass,
      alignment: req.body.alignment,
      language: req.body.language
    })
      .then(() => {
        res.end();
      })
      .catch(error => {
        res.sendStatus(500);
        console.log(error);
      });
  });
  // app.get("http://www.dnd5eapi.co/api/classes", function(req, res) {
  //   if (!req.user) {
  //     res.json({});
  //   } else {
  //     res.json({});
  //     console.log(res);
  //   }
  // });

  app.get("/api/user_data/:id", function(req, res) {
    if (!req.user) {
      res.sendStatus(403);
      return;
    } else {
      db.User.findAll({
        where: {
          id: req.params.id
        },
        include: db.Character
      }).then(data => {
        res.json(data);
      });
    }
  });
};
