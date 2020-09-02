const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema(
  {
    eventManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    judge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JudgeInvitation", invitationSchema);
