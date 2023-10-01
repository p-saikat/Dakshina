import mongoose from "mongoose";

const TeacherSubjectSchema = new mongoose.Schema(
  {
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teachers",
      require: true,
    },
    subject_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects",
      require: true,
    },
    class: {
      type: String,
      require: true,
    },
    ratings: {
      type: Number,
      require: false,
      default: 0,
    },
    experience: {
      years: {
        type: Number,
        default: 0,
      },
      months: {
        type: Number,
        default: 0,
      },
    },
    fees: {
      type: Number,
      require: true,
    },
    fees_currency: {
      type: String,
      require: true,
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

const TeacherSubjects = mongoose.model("teacher_subjects", TeacherSubjectSchema);

export { TeacherSubjects };
