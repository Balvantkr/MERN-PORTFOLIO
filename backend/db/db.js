const colors = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECTED TO MONGODB".bgGreen.white);
  } catch (error) {
    console.log(`ERROR IN MONGODB ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
