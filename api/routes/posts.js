const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.getAllPosts);
router.post("/", PostsController.createPost); //localchost.com/posts

//DELETE a post
router.delete("/:id", PostsController.deletePost); //localchost.com/post/1 

//EDIT/UPDATE a post
router.patch("/:id/", PostsController.editPost);    //localchost.com/post/1/edit OR //localchost.com/post/1 BECAUSE IT'S FETCHING FROM THIS PARTICULAR URL TO PATCH TO?

module.exports = router;
