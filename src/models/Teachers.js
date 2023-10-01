import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    school_teacher: {
      type: String,
      default: null,
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

const Teachers = mongoose.model("teachers", TeacherSchema);

export { Teachers };
