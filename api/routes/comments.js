const express = require("express");

const commentController = require("../controllers/comments");

const router = express.Router();

// Get all comments
router.route("/")
    .get(commentController.getAllComments)
    .post(commentController.createComment);
router.route("/:id")
    .get(commentController.getComment)
    .delete(commentController.deleteComment)
    .put(commentController.updateComment);

module.exports = router