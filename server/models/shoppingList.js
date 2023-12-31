const mongoose = require("mongoose");

const { Schema } = mongoose;

const shoppingSchema = new Schema(
  {
    iid: {
      type: String,
      required: true,
    },
    ttl: {
      type: String,
      required: true,
    },
    thb: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const ShoppingList = mongoose.model("ShoppingList", shoppingSchema);

module.exports = {
  ShoppingList,
};
