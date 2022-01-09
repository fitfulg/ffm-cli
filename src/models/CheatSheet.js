const { Schema, model } = require('mongoose');

const CheatSheet = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = model('CSheet', CheatSheet);
