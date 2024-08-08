//This profile page is for non logged in users. It will display the user's profile card and their posts.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserInfoById } from "../../services/userInfos";
import { UserProfileCard } from "../../components/User/UserProfileCard";
import {FeedPage} from "../Feed/FeedPage";
import { useParams } from "react-router-dom";
import { MyFriends } from "../../components/Friend/MyFriends";


export const UserProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchUser = async () => {
            console.log("fetching user");

            
        try {
            const  userInfo = await getUserInfoById(token, id);
            console.log("userInfo: ", userInfo.user);
            setUserInfo(userInfo.user);
        } catch (err) {
            console.error(err);
            navigate("/404");
        }
        };
    
        fetchUser();
    }
    , [navigate]);

    return (
        <div className="profile-and-feed-wrapper">
            <div className="profile-section">
                <div className="user-profile-card">
                    <UserProfileCard user={userInfo} />
                </div>
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

            <div className="feed-container">
                <FeedPage />
            </div>
        </div>
    )
}