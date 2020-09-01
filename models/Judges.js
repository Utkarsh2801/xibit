const mongoose = require("mongoose");

const judgeSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    invitations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invitation",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Judge", judgeSchema);
