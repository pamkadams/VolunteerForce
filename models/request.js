const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  location: String,
  lastName: {
    type: String,
    required: "Name is required"
  },

  firstName: {
    type: String,
    required: "Name is required"
  },
  phone: {
    type: String,
    required: "Phone is required"
  },

  date: Date,

  urgent: Boolean,

  saline_bags: Number,
  iv_supplies: Number,
  tape: Number,
  gauze: Number,
  bandages_2x2: Number,
  bandages_4x4: Number,
  bandages_6x9: Number,
  benznidazoleBottomPecan: Number,
  aspirin: Number,
  gluscose: Number,
  albuterol: Number,
  Fexinidazole: Number,
  rifampicin: Number,
  ASMQ: Number,
  NECT: Number
});
const Requests = mongoose.model("Requests", RequestSchema);
module.exports = Requests;
