const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const getUserInfo = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("token, ", token);
  const response = await fetch(`${BACKEND_URL}/profiles`, requestOptions);
  if (response.status !== 200) {
    throw new Error("Unable to fetch user");
  }
  const data = await response.json();
  return data;
};

export const getUserInfoById = async (token, id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${BACKEND_URL}/profiles/profiles/${id}`, requestOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Unable to fetch user: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch user failed:', error);
    throw error;
  }
};

export const updateUserInfo = async  (token,data) => {
  console.log("data: ", data);
  console.log("token: ", token);  
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BACKEND_URL}/profiles`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to update user");
  }

  const updatedUser = await response.json();
  return updatedUser;
};

export const deleteUser = async () => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${BACKEND_URL}/profiles`, requestOptions);

  if (response.status !== 204) {
    throw new Error("Unable to delete user");
  }
};


// Get all non-friends
export const getNonFriends = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/profiles/nonfriends`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to fetch non friends");
  }

  const data = await response.json();
  return data;
}

// Add a friend
export const addFriend = async (token, friend_id) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ friend_id }),
  };

  const response = await fetch(`${BACKEND_URL}/profiles/friends`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to add friend");
  }

  const data = await response.json();
  return data;
}

// Get all friends

export const getFriends = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/profiles/friends`, requestOptions);
  
  if (response.status !== 200) {
    throw new Error("Unable to fetch friends");
  }

  const data = await response.json();
  return data;
};

// Remove a friend

export const removeFriend = async (token, friend_id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ friend_id }),
  };

  const response = await fetch(`${BACKEND_URL}/profiles/friends`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to remove friend");
  }

  const data = await response.json();
  return data;
};