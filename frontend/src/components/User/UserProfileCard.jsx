// This component is the card that displays the user's name, picture and about me info that we'd expect at the top of the user's profile.
// Currently images wll not be implemented.

import React from 'react';


export const UserProfileCard = ({ user }) => {
    console.log('user', user);
    return (
        <div className='user-profile-card'>
            <div className='image placeholder'>This will be where the image is
                {/* <img src={user.image} alt={user.name} /> */}
            </div>
        <h2>{user.name}</h2>
        <p>{user.about}</p>
        </div>
    );
    }
