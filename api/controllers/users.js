const User = require("../models/user");

// todo: add token checks?

const create = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({ email, password, name, about: "" });

    await user.save();
    console.log("User created, id:", user._id.toString());
    res.status(201).json({ message: "OK" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({message: 'OK', users: users});
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something went wrong" });
  }
}


const get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({message: 'OK', user: user});
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something went wrong" });
  }
}

const update = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.email = req.body.email;
    user.password = req.body.password;
    user.about = req.body.about;
    user.name = req.body.name;
    await user.save();
    console.log('User updated, id:', user._id.toString());
    res.status(200).json({message: 'OK'});
  } catch (error) {
    console.error(err);
    res.status(400).json({ message: "Something went wrong" });
  }
}

const remove = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.delete();
    console.log('User deleted, id:', user._id.toString());
    res.status(200).json({message: 'OK'});
  } catch (error) {
    console.error(err);
    res.status(400).json({ message: "Something went wrong" });
  }
}

const UsersController = {
  create: create,
  get: get,
  update: update,
  delete: remove,
  getAll : getAll
};

module.exports = UsersController;
