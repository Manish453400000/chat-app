import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    profilePic: {
      type: String, //cloudinary url;
      default:
        "http://res.cloudinary.com/dwl9iesij/image/upload/v1703841893/cegzmjvgus1rghjfnhwf.jpg",
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
