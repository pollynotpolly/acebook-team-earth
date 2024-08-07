const User = require("../models/user");
const {generateToken} = require("../lib/token");
// todo: add token checks?

const getUser = async (req, res) => {
    const token = generateToken(req.user_id);
    const user = await User.findById(req.user_id);
    console.log('user: ' ,user);
    res.status(200).json({user: user, token: token});

};


const getUserById = async (req, res) => {
    try {
        const user_id = req.params.id;
        const token = generateToken(user_id);
        const user = await User.findById(user_id);
        res.status(200).json({user: user, token: token});

    } catch (err) {
        res.status(404).json({message: "User not found"});
    }

}


const updateUser = async (req, res) => {
    const token = generateToken(req.user_id);
    const user = await User.findByIdAndUpdate(req.user_id, req.body)
    res.status(200).json({user: user, token: token});
}

const deleteUser = async (req, res) => {
    const token = generateToken(req.user_id);
    await User.findByIdAndDelete(req.user_id);
    res.status(204).json({message: "User deleted", token: token});
}

const createUser = async (req, res) => {       // try-catch block... two main parts: a "try" block and one or more "catch" blocks
    try {                                     // try block: contains the code that might throw an exception.. if an exception occurs in this block, the rest of the code in the try block is skipped and control handed to catch block 
        console.log('req.body: ', req.body);
        
        // Check if a user with the given email already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // If no existing user, create a new one
        const user = new User(req.body);
        await user.save();
        console.log('user: ', user);
        res.status(201).json({ user: user });
    } catch (error) {                                    // specifies what type of exception to catch. contains code to handle the exception if it occurs - can be used to handle different types of exceptions
        console.error('Error creating user:', error);
        if (error.code === 11000) {
            // This is a MongoDB duplicate key error
            return res.status(400).json({ message: "Email already in use" });
        }
        res.status(500).json({ message: "Error creating user" });
    }
};

const addFriend = async (req, res) => {
    const token = generateToken(req.user_id);
    const user = await User.findByIdAndUpdate(req.user_id, {$push: {friends: req.body.friend_id}});
    res.status(200).json({user: user, token: token});

}

const removeFriend = async (req, res) => {
    const token = generateToken(req.user_id);
    const user = await User.findByIdAndUpdate(req.user_id, {$pull: {friends: req.body.friend_id}});
    res.status(200).json({user: user, token: token});
}

const getFriends = async (req, res) => {
    const token = generateToken(req.user_id);
    const user = await User.findById(req.user_id);

    const friends = await User.find({_id: {$in: user.friends}});
    console.log('friends: ', friends);
    res.status(200).json({friends: friends, token: token});
}


const getNonFriends = async (req, res) => {
    const token = generateToken(req.user_id);
    const user = await User.findById(req.user_id);
    const nonFriends = await User.find({ _id: { $ne: req.user_id, $nin: user.friends } });
    res.status(200).json({ nonFriends: nonFriends, token: token });
};

const userController = {
    getUser: getUser,
    getUserById: getUserById,
    updateUser: updateUser,
    deleteUser: deleteUser,
    createUser: createUser,
    addFriend: addFriend,
    removeFriend: removeFriend,
    getFriends: getFriends,
    getNonFriends: getNonFriends
};

module.exports = userController;