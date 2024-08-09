import React, { useEffect, useState } from 'react';
import { getFriends } from '../../services/userInfos';
import { FriendCard } from './FriendCard';
import { AddFriendForm } from "./AddFriendForm";

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
            <div className='my-friends-container'>
                <h1>My Friends</h1>
                
                
                {loading ? (
                    <p>Loading friends...</p>
                ) : friends.length === 0 ? (
                    <p>You have no friends yet.</p>
                ) : (
                    <>
                    <p>You have {friends.length} friends: </p>
                    <div className='friend-card-grid'>
                    {friends.map((friends) => (
                        <FriendCard friend={friends} key={friends.id} />
                    ))}
                    </div>
                    </>
                )}
                    
                </div>
                
            <AddFriendForm />
        </>
    );
};
