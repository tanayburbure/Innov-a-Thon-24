const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  college: String,
  gender: String,
  paymentStatus: { type: String, default: 'Pending' },
  razorpayOrderId: String,
  razorpayPaymentId: String,
});

module.exports = mongoose.model('Participant', participantSchema);
