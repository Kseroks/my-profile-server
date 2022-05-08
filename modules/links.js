const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    gradient: {
      type: Object,
      required: true,
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
    },
    icon: {
      type: Object,
      required: true,
      path: {
        type: String,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isImportant: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;
