import { getUserInfo } from "../../services/userInfos";
import { getComment } from "../../services/comments";
import { useParams } from "react-router-dom";

import { useState, useEffect, navigate } from "react";


// export const Comment = () => {
//     const [commentContent, setCommentContent] = useState("");
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         const fetchUser = async () => {
//             console.log("fetching user");
//         try {
//             const userInfo = await getUserInfo(token);
//             console.log("userInfo: ", userInfo.user);
//             setCommentContent(userInfo.user);
//         } catch (err) {
//             console.error(err);
//             navigate("/404");
//         }
//         };
    
//         fetchComment();
//     }, [navigate]);
    
// }

export const Comment = () => {
    const [commentContent, setCommentContent] = useState("");
    const { id } = useParams();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchComment = async () => {
            console.log("fetching comment");
            try {
                const comment = await getComment(token, id);
                console.log("comment: ", comment);
                setCommentContent(comment);
            } catch (err) {
                console.error(err);
                navigate("/404");
            }
        };
        fetchComment();
    }, [navigate]);
    return (
        <>
            <div className="comment">
                <div className="comment-user">
                    <img src="images/profile-40.jpg" />
                    <label>{commentContent.user}</label>
                </div>
                <div className="comment-content">
                    <span>{commentContent.content}</span>
                </div>
            </div>
        </>
    )
}

export default Comment;