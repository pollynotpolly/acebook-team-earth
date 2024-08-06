import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Comment from "../../components/Comment/Comment";
import { getComments } from "../../services/comments";
import CreateCommentForm from "../../components/Input/CreateCommentForm";

const CommentList = (postId) => {
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getComments(token)
                .then((data) => {
                    setComments(data.comments);
                    localStorage.setItem("token", data.token);
                })
                .catch((err) => {
                    console.error(err);
                    navigate("/login");
                });
        }
    }, [navigate]);

    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/login");
        return;
    }

    return (
        <>
            <CreateCommentForm postId={postId}/>
            <div className="comment-list" role="comment-list">
                {comments.map((comment) => (
                    <Comment comment={comment} key={comment._id} />
                ))}
            </div>
        </>
    );
}

export default CommentList;