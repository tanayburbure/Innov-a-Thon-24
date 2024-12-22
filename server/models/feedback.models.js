const mongoose = require('mongoose');

// Define the schema for the feedback data
const feedbackSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
}, { timestamps: true });

// Create the model for the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
