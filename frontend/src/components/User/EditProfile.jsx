import React  from "react";
import { updateUserInfo } from "../../services/userInfos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EditProfile =(props) => {
    const [userName, setUsername] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [userAbout, setUserAbout] = useState("");
    const navigate = useNavigate();

    const handleName = (e) => {
        setUsername(e.target.value);
    }

    const handleSurname = (e) => {
        setUserSurname(e.target.value);
    }

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
        <div className="edit-profile-container">
            <h2>edit profile</h2>
        <div className="edit-profile">
        <form onSubmit={handleSubmit}>
            <input
        className="file-uploader"
        type="file"
        onChange="upload()"
        accept="image/*"
    />
            <input
                    type="text"
                    name="name"
                    ></input>
            <label >
                Name:
                <input
                    type="text"
                    name="name"
                    required={true}
                    value={userName}
                    onChange={handleName}
                />
            </label>
            <label>
                Surname:
                <input
                    type="text"
                    name="surname"
                    required={true}
                    value={userSurname}
                    onChange={handleSurname}
                />
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
            </div>
            </div>
    )
}
