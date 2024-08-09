// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getPosts = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/posts`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to fetch posts");
  }

  const data = await response.json();
  return data;
};

//formatting the user HTTP POST request to send it to the API:
export const createPost = async (token, content, user) => {   
  const dateTimeString = new Date().toLocaleString("en-GB"); 
  console.log("date time string " + dateTimeString);
  const payload = {
    content: content,
    time: dateTimeString,
  }
  const displayName = {
    content: user
  }
  const newPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
    user: JSON.stringify(displayName)
  };

  const response = await fetch(`${BACKEND_URL}/posts`, newPost);

  if (response.status !== 201) {
    throw new Error("Unable to create posts");
  }

  const data = await response.json();
  return data;
};

//DELETE post (KR: 49-67)
export const deletePost = async (token, id) => {   
  const deleteMethod = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/posts/${id}`, deleteMethod);

  if (response.status !== 201) {
    throw new Error("Unable to create posts");
  }

  const data = await response.json();
  return data;
};
  

//EDIT/UPDATE post - formatting the user HTTP PATCH request to send it to the API:
export const editPost = async (token, content, id) => {   
  const dateTimeString = new Date().toLocaleString("en-GB"); 
  console.log("date time string " + dateTimeString);
  const payload = {
    content: content,
    time:  dateTimeString // depends if we want to patch and change the time or add another field called 'edited time'? OR JUST NOT INCLUDE THE TIME SO THAT THE TIME DOESN'T CHANGE?
  };

  // const response = await fetch(`${BACKEND_URL}/posts/${id}`, editedPost); // DO WE DO SLASH EDIT OR JUST /POST/ID when FETCHING LINK?

  // const editedPost = {
  const response = await fetch(`${BACKEND_URL}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  
  if (response.status !== 200) {
    throw new Error("Unable to create posts");
  }

  const data = await response.json();
  return data;
};

