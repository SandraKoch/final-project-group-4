const { Schema, model } = require("mongoose");

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
  shoppingList: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: "ingredients",
      },
      ingredientId: {
        type: String,
        default: "",
      },
      measure: {
        type: String,
        required: [true],
      },
    },
  ],
});

const User = model("users", userSchema);

module.exports = {
  User,
};
