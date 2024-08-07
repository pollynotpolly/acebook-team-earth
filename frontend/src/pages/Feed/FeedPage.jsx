import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getPosts, createPost, deletePost } from "../../services/posts";
import Post from "../../components/Post/Post";
import CreatePostForm from "../../components/Input/CreatePostForm";

export const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getPosts(token)
        .then((data) => {
          const unorderedPosts = data.posts;  //KR: added lines 18-19 to 'reverse' the order of the posts - 
          setPosts(unorderedPosts.reverse());  // now newest shows 1st!
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

  //KR: lines 35-56
  const handleCreatePost = async (content) => {
    if (token) {
      try {
        const newPost = await createPost(token, content);
        setPosts([newPost, ...posts]); // Prepend the new post to the existing posts
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  const handleDeletePost = async (postContent) => {
    try {
      await deletePost(token, postContent);
      // how do you use setPosts to update the posts and re-render the component?
      setPosts(posts.filter(post => post.message !== postContent)); // Remove the post from the state based on content
    } catch (err) {
      console.error(err);
    }
  };
  const dateTimeString = new Date().toLocaleString("en-GB");

  return (
    <>
{/*Works, np - maybe better in the CreatePostForm component? */}
      <div className="create-post-container">
        <CreatePostForm />
      </div>
      <div className="posts-container">
        <div className="feed" role="feed">
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
}  
