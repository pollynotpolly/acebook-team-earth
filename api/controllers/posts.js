const Post = require("../models/post");
const User = require("../models/user");
const { generateToken } = require("../lib/token");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  const token = generateToken(req.user_id);
  res.status(200).json({ posts: posts, token: token });
};
//CREATE a new post 
const createPost = async (req, res) => {
  console.log(req.body);
  const currentUser = await User.findById(req.user_id)
  const post = new Post({message: req.body.content, time: req.body.time, user: currentUser.name + ' ' + currentUser.surname})
  post
    .save()
    .then((post) => {
      console.log("Post created, id:", post);
      res.status(201).json({ message: "OK" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Something went wrong" });
    });
  const newToken = generateToken(req.user_id);

};
//DELETE a post (KR:lines 27-41)
const deletePost = async (req, res) => { 
  console.log("______>>>>>>"); 
  console.log(req);
  const { id } =req.params;

  try {
    const result = await Post.findOneAndDelete({ _id: id});
    if (result) {
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//EDIT a post
const editPost = async (req, res) => { 
  console.log("___EDITING TEST______"); 
  console.log(req.body);
  const { id } =req.params;
  const message = req.body.content;
  console.log(id, message);
  try {
    const result = await Post.findOneAndUpdate({ _id: id}, {message: message}); // mesage or content? ALSO UPDATE the post (mongose website:https://mongoosejs.com/docs/tutorials/findoneandupdate.html)
    if (result) {
      res.status(200).json({ message: "Post edited successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const PostsController = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  deletePost: deletePost,
  editPost: editPost,
};

module.exports = PostsController;
