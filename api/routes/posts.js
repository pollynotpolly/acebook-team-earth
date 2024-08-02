const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.getAllPosts);
router.post("/", PostsController.createPost);

//DELETE a post
//router.delete("/", PostsController.deletePost);

//UPDATE a post
//router.patch("/", Postcontroller.updatePost);


module.exports = router;
