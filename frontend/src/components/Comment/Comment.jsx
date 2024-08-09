import { getUserInfo } from "../../services/userInfos";
import { getComment } from "../../services/comments";
import { useParams } from "react-router-dom";
import './Comment.css';

import { useState, useEffect, navigate } from "react";

const Comment = ({ comment }) => {
    console.log(comment);
    if (!comment) {
        return null;
    }

    return (
        <>
            <div className="comment">
                <div className="comment-user">
                    {/* <img src="images/profile-40.jpg" /> */}
                    <label>{comment.author}</label>
                </div>
                <div className="comment-content">
                    <span>{comment.content}</span>
                </div>
            </div>
        </>
    );
}

export default Comment;