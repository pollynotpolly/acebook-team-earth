import "./Post.css";
import { deletePost } from "../../services/posts";
import { LikeButton } from "../Utilities/LikeButton"
// import { set } from "mongoose";
import CommentList from "../Comment/CommentList";
import { useState } from "react";

const Post = (props) => {
  const [showComments, setShowComments] = useState(false);
  
  const handleDelete = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await deletePost(token, props.post._id);
      props.onDelete(props.post.message); // Call the onDelete prop to update the posts in the parent component
    } catch (err) {
      console.error(err);
    }
    window.location.reload();
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  }

  // const handleEdit = (event) => {
  //   event.preventDefault();
  //   console.log("Edit button pressed")
    // const token = localStorage.getItem("token");
    // createPost(token, userInput);
    // console.log(userInput);
    // window.location.reload(); 
  // };

  return (
    <>
  
  <div className="card post">
          <div className="post-header">
            <div className="post-author-info">
              <img src="images/page-thumb-1.png" />
              <div>              
                <div>
                  <span className="author-name">Bloomberg</span>
                  <i className="verified-icon"></i>
                </div>
                <div className="details">
                  <span> {props.post.time} </span>
                  <span> · </span>
                  <i className="post-settings-icon"></i>
                </div>
              </div>
            </div>
            <i className="post-menu-icon"></i>
          </div>
          <p><article key={props.post._id}>{props.post.message}</article></p>
          <div
          className={`comment-list-container ${
            showComments ? "expanded" : ""
          }`}
        >
          <div className="comment-list">
            <h3>Comments</h3>
            {showComments && <CommentList postId={props.post._id} />}
          </div>
        </div>
          <div className="post-actions">
            <div className="actions">
              <div className="action">
              <LikeButton />
              </div>
              <div className="action">
                <i className="comment-icon"></i>
                <input 
                type="button" 
                value="Comment" 
                onClick={toggleComments}
                className="comment-button"
                />
              </div>
              <div className="action">
                <i className="share-icon"></i>
                <span>Share</span>
              </div>
              {/* <button role="update-button" className="postupdate" type="update" onClick={handleEdit} value="Update"> Edit </button> */}
              <button role="delete-button" className="postdelete" type="delete" onClick={handleDelete}value="Delete"> 🗑️ Delete </button>  
            </div>
          </div>
        </div>
    </>

  )
};

export default Post;