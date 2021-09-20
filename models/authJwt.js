var jwt = require("jsonwebtoken");
var config = require("../config/auth.config");
var db = require("../models/users.model");
var User = db.user;


verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isDealer = (req, res, next) => {
  User.findById(req.userId).then(user => {
        if (user.userRole === "1") {
          next();
          return;
        }
        else{
          res.status(403).send({
            message: "Require Dealer Role!"
          });
        }
      });
    }

isCustomer = (req, res, next) => {
  User.findById(req.userId).then(user => {
        if (user.userRole === "0") {
          next();
          return;
        }
        else{
          res.status(403).send({
            message: "Require Customer Role!"
          });
        }
  });
};

var authJwt = {
  verifyToken: verifyToken,
  isDealer: isDealer,
  isCustomer: isCustomer
};

module.exports = authJwt;
