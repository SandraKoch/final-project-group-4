const mongoose = require("mongoose");
const { mongoConnection } = require("./config");

const connect = async () => {
  try {
    await mongoose.connect(mongoConnection);
  } catch (e) {
    console.error(e);
    throw new Error("Database connection filed");
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (e) {
    console.error(e);
    throw new Error("Cannot disconnect from database");
  }
};

module.exports = {
  connect,
  disconnect,
};
