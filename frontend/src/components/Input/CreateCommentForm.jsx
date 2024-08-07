import { useState } from "react";
import { createComment } from "../../services/comments";

export const CreateCommentForm = ({ postId }) => {
    const [content, setContent] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await createComment(token, {post_id: postId}, content);
            setContent("");
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-comment-form">
            <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Add a comment..."
                required
            />
            <button type="submit">✉️</button>
        </form>
    );
}

export default CreateCommentForm;