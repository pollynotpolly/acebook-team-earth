import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const LikeButton = () => {
    const [like, setLikes] = useState(0);  //useState created to count likes
    const [isLiked, setIsLiked] = useState(false);  //useState created to manage wether it is liked - set to false as everything starts off unliked 

    const handleLike = () => {
        if (isLiked) {
            setLikes(like-1);
            setIsLiked(false);
        } else {
            setLikes(like+1);
            setIsLiked(true);
        }
    };
    return (
        <div className="like-container">
            <button className="like-button" onClick={handleLike}>
                <FontAwesomeIcon icon={faThumbsUp} />
                {isLiked ? ' Unlike' : ' Like'}
            </button>
            <span className="like-count">{like} {like === 1 ? 'like' : 'like'}</span>
        </div>
    );
};


export default LikeButton;

