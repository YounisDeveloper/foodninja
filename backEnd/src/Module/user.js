const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  userName: {
    type: String,
  },
  bio: {
    type: String,
  },
  links: {
    type: Array,
    default: [],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  fcmToken: {
    type: String,
    default: null,
  },

  deviceType: {
    type: String,
    default: "",
  },
  token: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("User", user);
module.exports = User;
