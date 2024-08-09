import { getUserInfo } from "../../services/userInfos";
import { getComment } from "../../services/comments";
import { useParams } from "react-router-dom";
import './Comment.css';

import { useState, useEffect, navigate } from "react";

const Comment = ({ comment }) => {
    if (!comment) {
        return null;
    }

    return (
        <div className="comment">
            <div className="comment-user">
                <label>{comment.user_id.name}</label>
            </div>
            <div className="comment-content">
                <span>{comment.content}</span>
            </div>
        </div>
    );
}

export default Comment;