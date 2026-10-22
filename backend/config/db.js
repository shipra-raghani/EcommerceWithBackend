import mongoose from "mongoose";
import "dotenv/config";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const db = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log(`MongoDb Connnected`);
  } catch (error) {
    console.error(`MongoDb connection error:${error.message}`);
  }
};
