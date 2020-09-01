const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    trim: true,
    required: true,
  },
  eventManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventManager",
  },
  type: {
    type: String,
    enum: [],
    required: true,
  },
  eventDescrition: {
    type: String,
    required: true,
    max: 500,
    min: 100,
  },
  logo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [],
    required: true,
  },
  organiserDescription: {
    eventDescrition: {
      type: String,
      required: true,
      max: 500,
      min: 100,
    },
  },
  division: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  gallery: {
    type: [String],
  },
  isCompleted: {
    type: Boolean,
  },
  judges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Judge",
    },
  ],
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participant",
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
