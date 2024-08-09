import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export const FriendCard = ( friend ) => {
    const navigate = useNavigate();
    console.log(friend.friend.surname)


    const shortenName = (name) => {
        if (name === undefined) {
            return
        }
        if (name.split(' ').length > 1 ){
            return name.split(' ')[0]
        } else {
            return name
        }
    }

    const handleClick = () => {
        navigate(`/profile/${friend.friend._id}`);
    }
    return (
        <div className='friend-card' onClick={handleClick}>
            <h2>{shortenName(friend.friend.name)} {shortenName(friend.friend.surname)}</h2>
            <div className='fc-image'>
                {friend.image ? (
                    <img src={friend.image} alt={friend.name} />
                ) : (
                        <img className="fc-image" src="src/assets/image6.jpg" alt="Image 6" />
                )}
            </div>
        
        </div>
    );
};
