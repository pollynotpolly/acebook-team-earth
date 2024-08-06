import "./Post.css";
import CommentList from "../Comment/CommentList";

const Post = (props) => {
  return (
    <>
  {/* <div className="container">
  <article key={props.post._id}>{props.post.message}</article>;
  </div> */}
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
                  <span>4h</span>
                  <span> · </span>
                  <i className="post-settings-icon"></i>
                </div>
              </div>
            </div>
            <i className="post-menu-icon"></i>
          </div>
          <p><article key={props.post._id}>{props.post.message}</article></p>
          <div classname="comment-list">
            <CommentList />
          </div>
          {/* <p className="post-body">As of Monday, only about 56% of people eligible to get the shot have stepped forward in a
            nation with the
            world’s second-worst Covid-19 outbreak.</p> */}
          {/* <a className="post-image">
            <img src="images/feed-image-1.jpg" />
            <div className="excerpt">
              <div className="post-info-icon-wrap">
                <i className="post-info-icon"></i>
              </div>
              <label>bloomberg.com</label>
              <h3>India’s Unusual Vaccine Problem: Plenty of Shots, But Few Takers</h3>
              <span>Most of the world is struggling to secure enough vaccines to inoculate their populations. India has
                the opposite problem: Plenty of shots, but a shortage of people willing to take them.</span>
            </div>
          </a> */}
          {/* <div className="post-reactions">
            <div className="reactions">
              <div className="emojis">
                <img src='/images/wow.svg' />
                <img src='/images/haha.svg' />
                <img src='/images/like.svg' />
              </div>
              <span>366</span>
            </div>
            <div className="comment-share">
              <div>
                <span>121</span>
                <span>Comments</span>
              </div>
              <div className="shares">
                <span>48</span>
                <span>Shares</span>
              </div>
            </div>
          </div> */}
          <div className="post-actions">
            <div className="actions">
              <div className="action">
                <i className="like-icon"></i>
                <span>👍Like</span>
              </div>
              <div className="action">
                <i className="comment-icon"></i>
                <span>Comment</span>
              </div>
              <div className="action">
                <i className="share-icon"></i>
                <span>Share</span>
              </div>
            </div>
            {/* <div className="interact-as">
              <img src="images/profile-40.jpg" />
              <i className="dropdown-icon-small"></i>
            </div> */}
          </div>
        </div>
    </>

  )
};

export default Post;
