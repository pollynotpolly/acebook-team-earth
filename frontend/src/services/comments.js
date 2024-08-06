const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getComments = async (token) => {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${BACKEND_URL}/comments`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch comments");
    }

    const data = await response.json();
    console.log(data);
    return data;
};

export const getComment = async ({token, comment_id}) => {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${BACKEND_URL}/comments/${comment_id}`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch comments");
    }

    const data = await response.json();
    return data;
};

export const createComment = async (token, postId, content) => {


    const payload  = {
        postId: postId,
        content: content,
        
    };

    const newComment = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/comments`, newComment);

    if (response.status !== 201) {
        throw new Error("Unable to create comment");
    }

    const data = await response.json();

    return data;
};
