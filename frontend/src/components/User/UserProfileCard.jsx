// This component is the card that displays the user's name, picture and about me info that we'd expect at the top of the user's profile.
// Currently images wll not be implemented.

import React, { useEffect } from 'react';
import {EditProfileForm} from './EditProfileForm';
import { useParams } from 'react-router-dom';
import { RemoveFriend } from '../Friend/RemoveFriend';
import {AddFriendButton} from '../Friend/AddFriendButton';
import Modal from 'react-modal';
import { useState } from 'react';

Modal .setAppElement('#root');

// import Link from 'react-router-dom';


export const UserProfileCard = ({ user }) => {
    const myId = localStorage.getItem('id');
    const { id } = useParams();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [EditProfile, setEditProfile] = useState(null);

    const openModal = () => { 
        setModalIsOpen(true);
        setEditProfile(user);
    }

    const closeModal = () => {
        setModalIsOpen(false);
        setEditProfile(null);
    }

    const isFriend = Array.isArray(user.friends) && user.friends.includes(myId);
    const shortenedAbout = (about) => {
        if (typeof about === 'string' && about.length > 230) {
            return about.slice(0, 230) + '...';
        } else if (typeof about === 'string') {
            return about;
        } else {
            return 'No information available.';
        }
    }
    

    return (
        <div className='user-profile-card'>
            <div className='image-placeholder'>This will be where the image is
                {/* <img src={user.image} alt={user.name} /> */}
            </div>
        <h2>{user.name} {user.surname}</h2>
        <p>{shortenedAbout(user.about)}</p>
        {/* edit link page.. <button> <Link /></button> */}
    {!id ? (
        <button onClick={openModal}>Edit Profile</button>
    
    ) : isFriend ? (
      <RemoveFriend friendId={id} />
    ) : (
      <AddFriendButton profileId={id} />
    )}
          <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel= 'Edit Profile'
      className="edit-profile"
      overlayClassName="modal-overlay"
      >
        <div className="modal-header">
        <h2>Edit Profile</h2>
         <button onClick={closeModal}>Close</button>
        </div>
        {EditProfile && (
            <EditProfileForm user={user} closeModal={closeModal} />
        )}
       
      </Modal>

        </div>
    );
    }


