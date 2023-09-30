import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    date_of_birth: {
      type: Date,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    phone1: {
      type: String,
      require: true,
    },
    calling_code1: {
      type: String,
      require: true,
    },
    password: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phoneVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      require: true,
      enum: ["admin", "teacher", "student"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model("users", UserSchema);

export { Users };
