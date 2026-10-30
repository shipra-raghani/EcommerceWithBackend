import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required and must be unique"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Passwor is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  role: {
    type: String,
    enum: ["user", "seller"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
