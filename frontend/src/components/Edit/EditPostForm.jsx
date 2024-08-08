//Form where the user will be able to update an existing post to the feed
import { editPost, getPosts } from "../../services/posts";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPostForm.css";

const EditPostForm = () => {
    // const [userInput, setuserInput] = useState(props.post.message); //=> NOTE!!!! WE WANT THE ORIGINAL POST (WHICH USER THEN GOES ON TO EDIT) TO APPEAR HERE IN THE FIRST PLACE
    const [userInput, setUserInput] = useState(''); //KR
    const [loading, setLoading] = useState(true); //KR
    const { id } = useParams(); //KR
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const token = localStorage.getItem("token");
            try {
                const x = await getPosts(token);
                console.log(x);
                const post = x.posts.find(p => p._id === id);
                console.log("HERE!!!!!!");
                console.log(post);
                if (post) {
                setUserInput(post.message);
                } else {
                throw new Error("Post not found");
                }
            } catch (err) {
                console.error(err);
                navigate("/posts");
            } finally {
                setLoading(false);
            }
        };
    
        fetchPost()
    }, [id, navigate]);


    const handleUserInput = (event) => {
        // event.preventDefault();
        // const token = localStorage.getItem("token");
        setUserInput(event.target.value);
        // console.log(userInput);
        // try {
        //     await editPost(token, userInput, props.post._id);
        //     props.onChange(props.post.message); // Call the onChange prop to update the posts in the parent component
        //     navigate("/posts");
        //     } catch (err) {
        //         console.error(err);
        //         navigate("/posts");
        // }
        // window.location.reload();
    // setuserInput(event.target.value);
    };

    const handleSubmitofEditedPost = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
        // await editPost(token, props.post.message, props.post._id);
        // props.onEdit(props.post.message); 
        await editPost(token, userInput, id);
        navigate("/posts");
        } catch (err) {
        console.error(err);
        navigate("/posts");
        }
        // window.location.reload();
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return(
        <form onSubmit={handleSubmitofEditedPost}>      
        {/* <body>  */}
        {/* <form>  */}
            <div className="card">
                <div className="new-post-action">
                    <img src="src/assets/ProfileIcon.png" className="my-profile" alt="Profile Icon" />
            
                    <input placeholder="What's on your mind, Earthling?" className="postinput" value={userInput} onChange={handleUserInput} />
                {/* <button role="submit-edited-post-button" className="postedit" type="edit" value="Edit" onClick={handleSubmitofEditedPost}> Post </button>  */}
                    <button role="submit-edited-post-button" className="postedit" type="edit" > Post </button> 
                </div>
            </div>
        </form>
        // </body>
    );  
};

export default EditPostForm;



