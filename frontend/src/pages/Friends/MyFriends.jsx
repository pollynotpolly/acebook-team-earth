import React, { useEffect, useState } from 'react';
import { getFriends } from '../../services/userInfos';
import { FriendCard } from '../../components/Friend/FriendCard';
import { AddFriendForm } from "../../components/Friend/AddFriendForm";

export const MyFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const token = localStorage.getItem('token');
                const data = await getFriends(token);
                setFriends(data.friends);
            } catch (error) {
                console.error('Failed to fetch friends:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchFriends();
    }, []);

    return (
        <>
            <div className='my-friends'>
                <h1>My Friends</h1>
                {loading ? (
                    <p>Loading friends...</p>
                ) : friends.length === 0 ? (
                    <p>You have no friends yet.</p>
                ) : (
                    friends.map((friend) => (
                        <FriendCard friend={friend} key={friend.id} />
                    ))
                )}
            </div>
            <AddFriendForm />
        </>
    );
};
