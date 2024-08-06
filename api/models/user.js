const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String, required: false },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  friends: { type: Array, required: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
