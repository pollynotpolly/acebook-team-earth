const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, //added unique: true to the email field - creates a unique index in the database, preventing two documents from having the same email address.
  password: { type: String, required: true },
  about: { type: String, required: false },
  name: { type: String, required: true },
  surname: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
