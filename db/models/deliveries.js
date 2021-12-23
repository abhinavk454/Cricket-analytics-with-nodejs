const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Deliveries = new Schema({
  MATCH_ID: {
    type: Number,
    required: true,
  },
  INNING: {
    type: Number,
    required: true,
  },
  BATTING_TEAM: {
    type: String,
    required: true,
  },
  BOWLING_TEAM: {
    type: String,
    required: true,
  },
  OVER: {
    type: Number,
    required: true,
  },
  BALL: {
    type: Number,
    required: true,
  },
  BATSMAN: {
    type: String,
    required: true,
  },
  BOWLER: {
    type: String,
    required: true,
  },
  WIDE_RUNS: {
    type: Number,
    required: true,
  },
  BYE_RUNS: {
    type: Number,
    required: true,
  },
  LEG_BYE_RUNS: {
    type: Number,
    required: true,
  },
  NOBALL_RUNS: {
    type: Number,
    required: true,
  },
  PENALTY_RUNS: {
    type: Number,
    required: true,
  },
  BATSMAN_RUNS: {
    type: Number,
    required: true,
  },
  EXTRA_RUNS: {
    type: Number,
    required: true,
  },
  TOTAL_RUNS: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Deliveries", Deliveries);
