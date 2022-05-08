const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const descriptionSchema = new Schema(
  {
    siteName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Description = mongoose.model("Description", descriptionSchema);
module.exports = Description;
