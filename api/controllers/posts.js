const Post = require("../models/post");
const User = require("../models/user");
const { generateToken } = require("../lib/token");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  const token = generateToken(req.user_id);
  res.status(200).json({ posts: posts, token: token });
};

const createPost = async (req, res) => {
  console.log(req.body);
  const currentUser = await User.findById(req.user_id)
  const post = new Post({message: req.body.content, user: currentUser.name + ' ' + currentUser.surname})
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

//const deletePost = async (req, res) => {  
// };

//const updatePost = async (req, res) => {
// };

const PostsController = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  //deletePost: deletePost,
  //updatePost: updatePost,
};

module.exports = PostsController;
