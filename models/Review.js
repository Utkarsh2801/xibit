const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participant",
    },
    judge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Judge",
    },
    score: {
      type: String,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
