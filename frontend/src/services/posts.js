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
export const createPost = async (token, content) => {   
  const dateTimeString = new Date().toLocaleString("en-GB"); 
  console.log("date time string " + dateTimeString);
  const payload = {
    content: content + `Post created at ${dateTimeString}`
  }
  const newPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${BACKEND_URL}/posts`, newPost);

  if (response.status !== 201) {
    throw new Error("Unable to create posts");
  }

  const data = await response.json();
  return data;
};

