var User = require("../../../models/users.model");
var config = require("../../../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  User.findByEmail({
    where: {
      userEmail: req.body.userEmail
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          id: user.id,
          username: user.name,
          email: user.email,
          mobile: user.mobile,
          roles: user.userRole,
          accessToken: token
        });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};



exports.dealerBoard = (req, res) => {
  res.status(200).send("Dealer Content.");
};

exports.customerBoard = (req, res) => {
  res.status(200).send("Customer Content.");
};
