const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    description: {
      type: String,
      default: null,
    },
    descriptionFiles: [
      {
        type: String,
      },
    ],
    imageMedia: [
      {
        type: String,
      },
    ],
    videoMedia: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Participant", participantSchema);
