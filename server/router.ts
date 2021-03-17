import * as express from 'express';
const router = express.Router();
import * as tastings from './controllers/tasting.controller';
import * as user from './controllers/user.controller';
  
  // TASTINGS
  // Create a new Tasting
  router.post("/api/tastings", tastings.create);

  // Retrieve all tastings
  router.get("/api/tastings/:id", tastings.findAll);

  // Delete a Tasting with id
  // router.delete("/api/tastings/:id", tastings.delete);

  // Update a Tasting with id
  // router.put("/:id", tastings.update);

  // USER
  // Create a new user
  router.post("/api/user", user.create);
  router.post("/api/login", user.login);

  //Get user from db with id
  // router.get("/api/user/:id", user.findOne);

  //GET ALL USER FROM DB 
  router.get("/api/allusers", user.findAllUsers);

  router.get("/api/userByMail/:mail", user.findOneByMail);

export default router;
