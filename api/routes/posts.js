const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.getAllPosts);
router.post("/", PostsController.createPost);

const commentController = require("../controllers/comments");


//DELETE a post
router.delete("/:id", PostsController.deletePost);

//UPDATE a post
//router.patch("/", Postcontroller.updatePost);


module.exports = router;
