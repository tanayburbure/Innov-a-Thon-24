const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const Participant = require('../models/Participant');
require('dotenv').config();

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// API: Register Participant & Create Razorpay Order
router.post('/register', async (req, res) => {
  try {
    const { name, email, age, college, gender } = req.body;

    // Save participant to DB
    const participant = new Participant({ name, email, age, college, gender });
    await participant.save();

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: 100 * 100, // Amount in paise (₹100)
      currency: 'INR',
      receipt: `receipt_${participant._id}`,
    });

    participant.razorpayOrderId = order.id;
    await participant.save();

    res.json({
      success: true,
      orderId: order.id,
      participantId: participant._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
});

// API: Verify Payment
router.post('/verify', async (req, res) => {
  const crypto = require('crypto');
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

  try {
    // Verify Razorpay signature
    const hmac = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(razorpayOrderId + '|' + razorpayPaymentId)
      .digest('hex');

    if (hmac === razorpaySignature) {
      // Update participant payment status
      const participant = await Participant.findOneAndUpdate(
        { razorpayOrderId },
        { paymentStatus: 'Completed', razorpayPaymentId },
        { new: true }
      );

      res.json({ success: true, participant });
    } else {
      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Verification failed' });
  }
});

module.exports = router;
