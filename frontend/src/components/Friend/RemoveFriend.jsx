import { removeFriend } from "../../services/userInfos";
import React from "react";

export const RemoveFriend = (props) => {
    console.log('I pressed the button and sent this id: ', props.friendId);
    const handleRemoveFriend = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            console.log("I'm authorised with this token: ", token);
            await removeFriend(token, props.friendId);
         
        } catch (error) {
            console.error("Failed to remove friend:", error);
            alert("Failed to remove friend");
        }
    };

    return (
        <div className="remove-friend">
            <button onClick={handleRemoveFriend}>Remove Friend</button>
        </div>
    );
}