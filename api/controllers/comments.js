const Comment = require("../models/comments");
const User = require("../models/user");
const {generateToken} = require("../lib/token");

const getAllComments = async (req, res) => {
    try {
        const token = generateToken(req.user_id);
        const comments = await Comment.find({})
            .populate("user_id", "name")
            .exec()
        res.status(200).json({comments: comments, token: token});
    } catch (err) {
        res.status(500).json({message: "Error fetching comments"});
    }
};

const getComment = async (req, res) => {
    try {
        const token = generateToken(req.user_id);
        const comment = await Comment.findById(req.params.id)
            .populate("user_id", "name")
            .exec();
        if (!comment) {
            res.status(404).json({message: "Comment not found", token: token});
            return;
        }
        res.status(200).json({comment: comment, token: token});
    } catch (err) {
        res.status(500).json({message: "Error fetching comment"});
    }
}

const createComment = async (req, res) => {
    const token = generateToken(req.user_id);
    console.log(req.body);
   
    post_id = req.body.postId.post_id;

    content = req.body.content;
 
    user_id = req.user_id;

    const comment = new Comment({ post_id, content, user_id});
    await comment.save();
    res.status(201).json({comment: comment, token: token});
}

const deleteComment = async (req, res) => {
    const token = generateToken(req.user_id);
    await Comment.findByIdAndDelete(req.comment_id);
    res.status(204).json({message: "Comment deleted", token: token});

}

const updateComment = async (req, res) => {
    const token = generateToken(req.user_id);
    const comment = await Comment.findByIdAndUpdate(req.comment_id, req.body);
    res.status(200).json({comment: comment, token: token});

}

const commentController = {
    getAllComments: getAllComments,
    getComment: getComment,
    updateComment: updateComment,
    deleteComment: deleteComment,
    createComment: createComment,
};

module.exports = commentController;