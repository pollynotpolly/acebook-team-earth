//This profile page is for non logged in users. It will display the user's profile card and their posts.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserInfo } from "../../services/userInfos";
import { UserProfileCard } from "../../components/User/UserProfileCard";
import {ProfileFeed} from "../../components/Feeds/ProfileFeed";


export const UserProfilePage = () => {
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
    }
    , [navigate]);

    return (
        <>
        <UserProfileCard user={userInfo} />

        {/* Will need a specific feed for profile - feed filtered for UserProfile */}
        <ProfileFeed user={userInfo}/>  
        </>
    ); 
}
