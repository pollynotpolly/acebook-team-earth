// This component is the card that displays the user's name, picture and about me info that we'd expect at the top of the user's profile.
// Currently images wll not be implemented.

import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

// import Link from 'react-router-dom';



export const UserProfileCard = ({ user }) => {

    return (
        <div className='user-profile-card'>
            <div className='image placeholder'>This will be where the image is
                {/* <img src={user.image} alt={user.name} /> */}
            </div>
        <h2>{user.name} {user.surname}</h2>
        <p>{user.about}</p>
        {/* edit link page.. <button> <Link /></button> */}
        <Link to="/my-profile-settings/">Edit Profile</Link>
        <Link to="/my-friends/">Friends</Link>
        </div>
    );
    }


