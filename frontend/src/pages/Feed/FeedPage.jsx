import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { getPosts } from "../../services/posts";
import Post from "../../components/Post/Post";
import CreatePostForm from "../../components/Input/CreatePostForm";
import RightFeed from "../../components/Ads/RightFeed";
import LeftFeed from "../../components/Ads/LeftFeed";



export const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
    const fetchPosts = useCallback(async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try { 
          const data = await getPosts(token);
        // getPosts(token)
          // .then((data) => {
          const unorderedPosts = data.posts;  //KR: added lines 18-19 to 'reverse' the order of the posts - 
          setPosts(unorderedPosts.reverse());  // now newest shows 1st!
          localStorage.setItem("token", data.token);
        } catch(err) {
          console.error(err);
          navigate("/login");
        }
      }
    }, [navigate]);

    useEffect(() => {
      fetchPosts();
    }, [fetchPosts, location.key]);

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <>

{/*Works, np - maybe better in the CreatePostForm component? */}
      


  
      <div className = "feed-page">

        {/* container for the form */}
      <div className="posts-container">

      <div className="create-post-container">
        <CreatePostForm refreshPosts={fetchPosts} />
      </div>

      </div>


        <div>
        <div className ="LeftFeed">
        <LeftFeed />
        </div>

        <div className="feed" role="feed">
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>

        <div className ="LeftFeed">
          <RightFeed />
        </div>
        </div>

        </div>
        

       


        

      
    </>
  );
}  
