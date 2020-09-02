const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    judge: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    totalScore: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
