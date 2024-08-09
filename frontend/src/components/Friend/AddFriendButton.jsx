import React from "react";
import { addFriend } from "../../services/userInfos";

export const AddFriendButton = (props) => {
    console.log('Profile ID:', props);



    const handleAddFriend = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await addFriend(token, props.profileId);
        } catch (error) {
            console.error("Failed to add friend:", error);
            alert("Failed to add friend");
        }
    }


    return (
        <div className="add-friend-button">
            <button onClick={handleAddFriend}>Add Friend</button>
        </div>
    );
}