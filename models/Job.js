const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide a company name'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide a position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId, //every job created will be tied to a user
      ref: 'User',
      required: [true, 'Please provide a user'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
