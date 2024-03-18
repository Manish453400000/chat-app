import mongoose from "mongoose";

export const connectDB = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("CONNECTED TO DB..");
  } catch (err) {
    console.log("DB connection failed: " + err.message);
  }
};
