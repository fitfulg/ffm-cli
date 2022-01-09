const { Schema, model } = require('mongoose');

const CheatSheet = new Schema(
  {
    kind: { type: String },
    title: { type: String },
    description: { type: String },
    example: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = model('CSheet', CheatSheet);
