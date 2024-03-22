const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add a text value"],
    },

    lastName: {
      type: String,
      required: [true, "Please add a text value"],
    },

    phone: {
      type: String,
      required: [true, "Please add a text value"],
    },

    email: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
