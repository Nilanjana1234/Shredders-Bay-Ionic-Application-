module.exports = app => {
  const users = require("../controllers/user.controller");
  const { authJwt } = require("../../../models");

  // Create a new Customer
  app.post("/users", users.create);

  // Retrieve all Users
  app.get("/users", users.findAll);

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

  // Update a Customer Password with customerId
  app.put("/users/updatePass/:userId", users.updatePass);

  // Delete a User with customerId
  app.delete("/users/:userId", users.delete);

  // Delete all Users
  app.delete("/users", users.deleteAll);

  app.get("/users/admin", [authJwt.verifyToken, authJwt.isAdmin], users.adminBoard);

  app.get("/users/dealer", [authJwt.verifyToken], authJwt.isDealer, users.dealerBoard);

  app.get("/users/customer", [authJwt.verifyToken, authJwt.isCustomer], users.customerBoard);

  app.put("/users/activate/:userId", function(req, res){
    users.activateUser
  });

  app.put("/users/inactivate/:userId", users.inActiveUser);
  // Retrieve all Products
  app.get("/products", users.findProducts);


  // Retrieve all FAQs
  app.get("/faqs", users.findFaqs);
  // Retrieve all Notification
  app.get("/notifications", users.findNotifications);


   // Retrieve all Address
   app.get("/address", users.findAdress);

   // Retrieve all getTermsConditions
   app.get("/terms-conditions", users.findTermsConditions);
};
