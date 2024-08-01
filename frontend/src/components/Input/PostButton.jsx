// Template where the user will be able to type/create & send their post to the feed
//import "src/components/PostButton.css";
import { useState } from "react";
import { createPost } from "../../services/posts";

function PostButton(){
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
  };
  return(
      <>
        <form className ="Container">
        <label>Create New Post:</label>
        <br/>
        <textarea rows="4" cols="50"
        value={userInput}
        onChange={handleUserInput}/>
        <br/>
        <input role="submit-button" className ="postsubmit" type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      </>
    );  
}
export default PostButton;