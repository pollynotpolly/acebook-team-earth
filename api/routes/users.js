const express = require("express");

const UsersController = require("../controllers/users");

const router = express.Router();

router.post("/", UsersController.create);
router.get("/", UsersController.getAll);
router.get("/:id", UsersController.get);
router.get("/", UsersController.getAll);
router.put("/:id", UsersController.update);
router.delete("/:id", UsersController.delete);


module.exports = router;
