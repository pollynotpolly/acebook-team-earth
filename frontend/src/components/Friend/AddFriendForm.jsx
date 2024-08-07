import React, { useEffect, useState } from 'react';
import { getNonFriends, addFriend } from '../../services/userInfos';

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
            alert('Friend added successfully');
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
        <div className='add-friend-form'>
            <h2>Add a Friend</h2>
            <form onSubmit={handleAddFriend}>
                <select name='friend_id' required>
                    <option value="">Select a friend</option>
                    {loading ? (
                        <option>Loading...</option>
                    ) : (
                        nonFriends.map((friend) => (
                            <option key={friend._id} value={friend._id}>{friend.name} {friend.surname} </option>
                        ))
                    )}
                </select>
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    );
};
