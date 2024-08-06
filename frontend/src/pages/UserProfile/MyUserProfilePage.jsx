// This is the profile page, where the user's profile card is displayed and the users posts are displayed below.


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserInfo } from "../../services/userInfos";
import { UserProfileCard } from "../../components/User/UserProfileCard";
import {ProfileFeed} from "../../components/Feeds/ProfileFeed";
import CreatePostForm from "../../components/Input/CreatePostForm";
import "./UserProfilePage.css";

export const MyUserProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchUser = async () => {
            console.log("fetching user");
        try {
            const userInfo = await getUserInfo(token);
            console.log("userInfo: ", userInfo.user);
            setUserInfo(userInfo.user);
        } catch (err) {
            console.error(err);
            navigate("/404");
        }
        };
    
        fetchUser();
    }, [navigate]);
    
    return (
        <>
        <UserProfileCard user={userInfo} />
        <CreatePostForm user={userInfo} />

        {/* Will need a specific feed for profile - feed filtered for UserProfile */}
        <ProfileFeed user={userInfo}/>  
        </>
    );
}
