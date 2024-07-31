// Creating the template/'box'/area where the user will be able to create and send their post to the feed
// import "src/components/PostButton.css";
import { useState } from "react";
import { createPost } from "../../services/posts";

function PostButton(){
  // Button to say that you've clicked it - to be removed later?
  // function postalert(){
  //   alert('Post successfully submitted!');
  // }
  const [userInput, setuserInput] = useState("");
  console.log(userInput);

  const handleUserInput = (event) => {
    // setuserInput(event.target.value);
    setuserInput(event.target.value);
    //console.log(userInput);
  };
  const testInput = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    createPost(token, userInput);
    // setuserInput(event.target.value);
    console.log(userInput);
  };
  return(
      <>
        <form className ="Container">
        <label>Create New Post:</label>
        {/* <input
          id="post"
          type="text"
        /> */}
        <br/>
        <textarea rows="4" cols="50"
        value={userInput}
        onChange={handleUserInput}/>
        <br/>
        <input role="submit-button"  className ="postsubmit" type="submit" value="Submit" onClick={testInput} />
      </form>
      </>
    );  
}

// If a person clicks on the button, the post is added onto the feed
// event handler that allows post to be added onto the feedpage ??
const UploadPost = (event) =>{
  event.target.value
  //appendchld to page in the form of a post????

};
export default PostButton;