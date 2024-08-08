import React  from "react";
import { updateUserInfo } from "../../services/userInfos";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EditProfileForm =(props) => {
    const [userName, setUserName] = useState(props.name);
    const [userSurname, setUserSurname] = useState(props.surname);
    const [userAbout, setUserAbout] = useState(props.about);
    const navigate = useNavigate();


    const handleAbout = (e) => {
        setUserAbout(e.target.value);
    }



    const handleSubmit = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        try {
            const updatedUser = await updateUserInfo(token,{
                name: userName,
                surname: userSurname,
                about: userAbout,
            });

            console.log(updatedUser);
            navigate("/my-profile");
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
                />
            </label>
            <div className="button-container">
            <button type="submit" className="button">Update</button>
            
            </div>
            </form>
          
           </>
    )
}
