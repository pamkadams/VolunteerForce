const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ForceSchema = new Schema({
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
  benznidazole: Number,
  aspirin: Number,
  gluscose: Number,
  albuterol: Number,
  Fexinidazole: Number,
  rifampicin: Number,
  ASMQ: Number,
  NECT: Number
});
const Force = mongoose.model("Force", ForceSchema);
module.exports = Force;
