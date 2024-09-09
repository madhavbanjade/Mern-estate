import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true, //This indicated that userName is compulsory.
      unique: true, //This checks if there is already existing the same user name or not.
    },
    email: {
      type: String,
      required: true, // Compulsory email
      unique: true, //checks whether there is same email or not in database.
    },
    password: {
      type: String,
      required: true, //compulsory password
    },
  },
  { timestamps: true } //This record the timing of uploaded & updating the data in database..
);

const User = mongoose.model("User", userSchema);

export default User;
