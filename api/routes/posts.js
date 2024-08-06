const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.getAllPosts);
router.post("/", PostsController.createPost);

//DELETE a post
//router.delete("/", PostsController.deletePost);

//UPDATE a post
//router.patch("/", Postcontroller.updatePost);

const commentController = require("../controllers/comments");

// Get all comments
router.route("/comments")
    .get(commentController.getAllComments)
    .post(commentController.createComment);
router.route("/comments/:id")
    .get(commentController.getComment)
    .delete(commentController.deleteComment)
    .put(commentController.updateComment);


module.exports = router;
