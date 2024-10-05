import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  password: {
    type: String,
  },
});

const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
