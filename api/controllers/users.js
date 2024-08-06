const User = require("../models/user");
const {generateToken} = require("../lib/token");
// todo: add token checks?

const getUser = async (req, res) => {
    const token = generateToken(req.user_id);
    const user = await User.findById(req.user_id);
    console.log('user: ' ,user);
    res.status(200).json({user: user, token: token});

};

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

const createUser = async (req, res) => {
    console.log('req.body: ', req.body);
    const user = new User(req.body);
    await user.save();
   
    res.status(201).json({user: user});
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
    updateUser: updateUser,
    deleteUser: deleteUser,
    createUser: createUser,
    addFriend: addFriend,
    removeFriend: removeFriend,
    getNonFriends: getNonFriends,
    getFriends: getFriends
};

module.exports = userController;