const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    eventManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EventManager",
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    judge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Judge",
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JudgeRequest", requestSchema);
