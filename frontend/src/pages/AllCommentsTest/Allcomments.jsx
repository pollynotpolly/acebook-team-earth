// I want to post every comment in database

import React from "react";

import { useState, useEffect, navigate } from "react";
import { getComments } from "../../services/comments";

export const AllComments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchComments = async () => {
            console.log("fetching comments");
            try {
                const comments = await getComments(token);
                console.log("comments: ", comments);
                setComments(comments);
            } catch (err) {
                console.error(err);
                navigate("/404");
            }
        };
        fetchComments();
    }, [navigate]);
    return (
        <>
            <div className="comments">
                {comments.map((comment) => (
                    <div className="comment">
                        <div className="comment-user">
                            <img src="images/profile-40.jpg" />
                            <label>{comment.user}</label>
                        </div>
                        <div className="comment-content">
                            <span>{comment.content}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}