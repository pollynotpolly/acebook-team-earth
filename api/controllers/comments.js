const Comment = require("../models/comments");
const {generateToken} = require("../lib/token");

const getAllComments = async (req, res) => {
    const token = generateToken(req.user_id);
    const comments = await Comment.find({});
    res.status(200).json({comments: comments, token: token});

}

const getComment = async (req, res) => {
    const token = generateToken(req.user_id);
    const comment = await Comment.findById(req.comment_id);
    res.status(200).json({comment: comment, token: token});

}

const createComment = async (req, res) => {
    const token = generateToken(req.user_id);
    const comment = new Comment(req.body);
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