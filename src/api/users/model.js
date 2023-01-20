import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    albums: [
      {
        title: { type: String, required: true },
        albumDate: { type: String },
        photos: [
          {
            comments: [{ type: String, required: true }],
            photoDate: { type: String },
            likes: [{ userId: { type: mongoose.Types.ObjectId } }],
          },
        ],
      },
    ],
    contacts: [{ userId: { type: mongoose.Types.ObjectId } }],
  },
  {
    timestamps: true,
  }
);

export default model("User", usersSchema);
