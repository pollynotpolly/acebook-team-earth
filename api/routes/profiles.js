const express = require("express");

const userController = require("../controllers/users");

const router = express.Router();

// Get user
router.get("/", userController.getUser);
// Get user by id
router.get("/profiles/:id", userController.getUserById);

//Update user by id
router.put("/", userController.updateUser);
//Delete user by id
router.delete("/", userController.deleteUser)

//Add friend to user
router.post("/friends", userController.addFriend);
//Remove friend from user
router.put("/friends/:id", userController.removeFriend);

//Get friends
router.get("/friends", userController.getFriends);
//Get non friends
router.get("/nonfriends", userController.getNonFriends);


module.exports = router;