import mongoose from "mongoose";
import "dotenv";
export const db = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log(`MongoDb Connnected`);
  } catch (error) {
    console.error(`MongoDb connection error:${error.message}`);
  }
};
