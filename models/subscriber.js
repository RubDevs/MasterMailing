const mongoose = require("mongoose");

const Subscriber = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter firstname"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter lastname"],
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          );
        },
      },
      lowercase: true,
      unique: true,
      index: true,
      required: [true, "Please enter an email"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subscriber", Subscriber);
