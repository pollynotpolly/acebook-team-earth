const express = require("express");

const userController = require("../controllers/users");

const router = express.Router();

// Get user by id
router.get("/", userController.getUser);
//Update user by id
router.put("/", userController.updateUser);
//Delete user by id
router.delete("/", userController.deleteUser)


module.exports = router;