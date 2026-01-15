const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    status: {
      type: String,
      enum: ['New', 'In Progress', 'Converted'],
      default: 'New'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
