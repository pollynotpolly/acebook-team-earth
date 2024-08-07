// Template where the user will be able to type/create & send their post to the feed
import { useState } from "react";
import { createPost } from "../../services/posts";
import "./CreatePostForm.css";

function CreatePostForm(){
  const [userInput, setuserInput] = useState("");
  console.log(userInput);

  const handleUserInput = (event) => {
    setuserInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    createPost(token, userInput);
    console.log(userInput);
    window.location.reload(); //KR: Posts page reloads automatically after submitting 'post'w/out refreshing page.
  };

  const alertFunction = () => {
    let userResponse = prompt("How are you feeling today? 😀 Happy - 👌Okay - 😞Lousy");
    if(userResponse == "Happy"){
    alert("That's the spirit! 🫶");
    } else if (userResponse == "Okay"){
    alert("Maybe a cup of coffee could help!? ☕");
    } else if (userResponse == "Lousy"){
    alert("Don't forget to reach out to friend! 👫");
    }
  };
    
  return(
      <>      
      <body> 
      <form> 
      <div className="card">
          <div className="new-post-action">
            <img src="src/assets/ProfileIcon.png" className="my-profile" />
            
            <input placeholder="What's on your mind, Yongmin?" className="postinput" value={userInput} onChange={handleUserInput} />
            <button role="submit-button" className="postsubmit" type="submit" value="Submit" onClick={handleSubmit}> Post </button> 
          </div>
          <div className="new-post-types">
            <div className="post-type"><i className="live-video-icon"></i><input className="live-video-button" type="button" value="🎥 Live Video"></input></div>
            <div className="post-type"><i className="photo-video-icon"></i><input className="photo-button" type="button" value="📷 Photo/Video"></input></div>
            <div className="desktop-tablet-only">

              <div onClick= {alertFunction} className="post-type"><i className="feeling-activity-icon"></i><input className="feeling-button" type="button" value="🙂 Feeling/Activity"></input></div>

            </div>
          </div>
        </div>
        </form>
      </body>
      </>
    );  

}
export default CreatePostForm;