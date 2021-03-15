const router = require('express').Router();

const tastings = require("./controllers/tasting.controller.ts");
const user = require("./controllers/user.controller.ts");

// TASTINGS
// Create a new Tasting
// router.post("/api/tastings", tastings.create);

// Retrieve all tastings
// router.get("/api/tastings/:id", tastings.findAll);

// Delete a Tasting with id
// router.delete("/api/tastings/:id", tastings.delete);

//   // // Update a Tasting with id
//   // router.put("/:id", tastings.update);

// USER
// Create a new user
router.post("/api/user", user.create);

//Get user from db with id
router.get("/api/user/:id", user.findOne);

//GET ALL USER FROM DB 
router.get("/api/allusers", user.findAllUsers);

// router.get("/api/:mail", user.findOneByMail)

module.exports = router;

