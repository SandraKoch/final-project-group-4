const { Schema, model } = require("mongoose");
const { ObjectId, String, Boolean } = Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  favorites: {
    type: Array,
    default: [],
  },
  shoppingList: {
    type: Array,
    default: [],
  },
});

const User = model("users", userSchema);

module.exports = {
  User,
};
