// This is the profile page, where the user's profile card is displayed and the users posts are displayed below.


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../services/userInfos";
import { UserProfileCard } from "../../components/User/UserProfileCard";
import { FeedPage } from "../Feed/FeedPage";
import { useNavigate } from "react-router-dom";



export const UserProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchUser = async () => {
        try {
            const userInfo = await getUserInfo();
            setUserInfo(userInfo);
        } catch (err) {
            console.error(err);
            navigate("/404");
        }
        };
    
        fetchUser();
    }, [id, navigate]);
    
    return (
        <>
        <UserProfileCard user={userInfo} />
        {/* Will need a specific feed for profile - feed filtered for UserProfile */}
        <FeedPage/>  
        </>
    );
}
