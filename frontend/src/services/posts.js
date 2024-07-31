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


//KR: I created the below with  Kim, I need to now connect it to the FeedPage.jsx file, that is why 
// createPost says it hasn't been called. This code is to create a new post on the feed page (as of now we 
// have the code for the backend, but we need to link it to the front it, which is what the below code is doing)   
export const createPost = async (token, content) => {    //creating a new function -line 26 & lines 27-41 is body of this function
  const newPost = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content: content})
  };

  const response = await fetch(`${BACKEND_URL}/posts`, newPost);

  if (response.status !== 201) {
    throw new Error("Unable to create posts");
  }

  const data = await response.json();
  return data;
};



