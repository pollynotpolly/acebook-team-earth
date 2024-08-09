//This profile page is for non logged in users. It will display the user's profile card and their posts.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserInfoById } from "../../services/userInfos";
import { UserProfileCard } from "../../components/User/UserProfileCard";
import {ProfileFeedPage} from "..//Feed/ProfileFeedpage";
import { useParams } from "react-router-dom";
import { MyFriends } from "../../components/Friend/MyFriends";


export const UserProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchProfileInfo=()=>{
        const token = localStorage.getItem("token");
        const fetchUser = async () => {
        try {
            const userInfo = await getUserInfoById(token,id);
            setUserInfo(userInfo.user);
        } catch (err) {
            console.error(err);
            navigate("/404");
        }
        };
        fetchUser();

    }

    useEffect(() => {
        fetchProfileInfo();
    }
    , [navigate]);

    return (
        <div className="profile-and-feed-wrapper">
            <div className="profile-section">
              
                    <UserProfileCard user={userInfo} update={fetchProfileInfo}/>
  
                <div className="additional-content-container"><h2>my photos</h2>
                <div className="image-grid">
                    <img src="src/assets/image1.jpg" alt="Image 1" />
                    <img src="src/assets/image2.jpg" alt="Image 2" />
                    <img src="src/assets/image3.jpg" alt="Image 3" />
                    <img src="src/assets/image4.jpg" alt="Image 4" />
                    <img src="src/assets/image5.jpg" alt="Image 5" />
                    <img src="src/assets/image6.jpg" alt="Image 6" />
                </div>
                </div>
                <MyFriends />
            </div>

            <div className="main-content">
                <ProfileFeedPage />
            </div>
        </div>
    )
}