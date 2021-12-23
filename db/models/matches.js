const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Matches = new Schema({
  MATCH_ID: {
    type: Number,
    required: true,
  },
  SEASON: {
    type: Number,
    required: true,
  },
  CITY: {
    type: String,
    required: true,
  },
  DATE: {
    type: Date,
    required: true,
  },
  TEAM1: {
    type: String,
    required: true,
  },
  TEAM2: {
    type: String,
    required: true,
  },
  TOSS_WINNER: {
    type: String,
    required: true,
  },
  TOSS_DECISION: {
    type: String,
    required: true,
  },
  RESULT: {
    type: Number,
    required: true,
  },
  WINNER: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Matches", Matches);
