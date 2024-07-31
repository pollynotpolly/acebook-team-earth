const express = require("express");

const userController = require("../controllers/users");

const router = express.Router();

router.get("/", userController.getUser);
router.put("/", userController.updateUser);
router.delete("/", userController.deleteUser);
router.post("/", userController.createUser);



module.exports = router;
