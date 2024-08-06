import React from 'react';
import { Link } from "react-router-dom";

export const FriendCard = ({ friend }) => {
    return (
        <div className='friend-card'>
            <div className='image'>
                {friend.image ? (
                    <img src={friend.image} alt={friend.name} />
                ) : (
                    <div className='placeholder'>No Image</div>
                )}
            </div>
            <h2>{friend.name} {friend.surname}</h2>
            <Link to={`/profile/${friend._id}`}>View Profile</Link>
        </div>
    );
};
