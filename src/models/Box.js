const mongoose = require('mongoose');

const Box = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'File' }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Box', Box);
