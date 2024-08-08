import React  from "react";
import { updateUserInfo } from "../../services/userInfos";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EditProfileForm =(props) => {
    console.log(props.closeModal);


    const [userAbout, setUserAbout] = useState(props.user.about);
    const navigate = useNavigate();

    console.log(userAbout);


    const handleAbout = (e) => {
        setUserAbout(e.target.value);
    }



    const handleSubmit = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        try {
            const updatedUser = await updateUserInfo(token,{
                name: props.user.name,
                surname: props.user.surname,
                about: userAbout,
            });

            console.log(updatedUser);
            props.closeModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Change Profile picture:
            <input
                    type="text"
                    name="name"
                    ></input>
                    </label>

            <label>
                About:
                <textarea
                    name="about"
                    value={userAbout}
                    onChange={handleAbout}
                    placeholder={userAbout}
                />
            </label>
            <div className="button-container">
            <button type="submit" className="button">Update</button>
            
            </div>
            </form>
  </>
    )
}
