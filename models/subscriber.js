const mongoose = require("mongoose");

const Subscriber = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a full name"],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subscriber", Subscriber);
