import React, { useEffect, useState } from 'react';
import { getNonFriends, addFriend } from '../../services/userInfos';
import { FriendCard } from './FriendCard';

export const AddFriendForm = () => {
    const [nonFriends, setNonFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleAddFriend = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const friend_id = e.target.friend_id.value;
            console.log('friend_id: ', friend_id);
            await addFriend(token, friend_id);
            
        } catch (error) {
            console.error('Failed to add friend:', error);
            alert('Failed to add friend');
        }
    };

    useEffect(() => {
        const fetchNonFriends = async () => {
            try {
                const token = localStorage.getItem('token');
                const data = await getNonFriends(token);
                setNonFriends(data.nonFriends);
                console.log('nonFriends: ', data.nonFriends);
            } catch (error) {
                console.error('Failed to fetch non friends:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchNonFriends();
    }, []);

    

return (
    <>
        <div className='my-friends-container'>
            <h1>Add Friends</h1>
            {loading ? (
                <p>Loading people...</p>
            ) : nonFriends.length === 0 ? (
                <p>No-one to add.</p>
            ) : (
                <>
                <div className='friend-card-grid'>
                {nonFriends.map((nonFriends) => (
                    <FriendCard friend={nonFriends} key={nonFriends.id} />
                ))}
                </div>
                </>
            )}
                
            </div>
    </>
);
};

