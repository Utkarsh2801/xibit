const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participant",
    },
    judge: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Judge",
      },
    ],
    totalScore: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
