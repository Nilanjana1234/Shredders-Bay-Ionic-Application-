module.exports = app => {
  const users = require("../controllers/user.controller");
  const  authJwt  = require("../../../models");

  // Create a new Customer
  app.post("/users", users.create);

  // Retrieve all Users
  app.get("/users", users.findAll);

 // Retrieve all Products
 app.get("/products", users.findProducts);

  // Retrieve a single User with userId
  app.get("/users/:userId", users.findOne);

  // Retrieve a single User with userEmail
  app.get("/users/email/:userEmail", users.findbyEmail);

   // Retrieve a All Customers
   app.get("/customers", users.allCustomer);

   // Retrieve a All Dealers
   app.get("/dealers", users.allDealer);

  // Update a Customer with customerId
  app.put("/users/:userId", users.update);

    // Update a Customer with customerId
    app.put("/users/status/:userId", users.status);


  // Delete a User with customerId
  app.delete("/users/:userId", users.delete);

  // Delete all Users
  app.delete("/users", users.deleteAll);


  app.get("/users/dealer", [authJwt.verifyToken, authJwt.isDealer], users.dealerBoard);

  app.get("/users/customer", [authJwt.verifyToken, authJwt.isCustomer], users.customerBoard);
};
