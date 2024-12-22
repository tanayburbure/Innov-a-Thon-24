const Feedback = require('../models/feedback.models'); // Import Feedback model
const { feedbackSchema } = require('../utils/validationSchama');

const handleFeedback = async (req, res) => {
  try {
    const validationResponse = feedbackSchema.safeParse(req.body)

    if (!validationResponse.success) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed.',
            errors: validationResponse.error.errors.map((err) => ({
                path: err.path.join('.'),
                message: err.message,
            })),
        });
    }

    const { name, email, message } = req.body;

    // Create a new feedback entry
    const feedback = new Feedback({
      name,
      email,
      message,
    });

    // Save feedback to the database
    await feedback.save();

    res.status(201).json({
      success: true,
      message: 'Feedback stored successfully!',
    });
  } catch (error) {
    console.error('Error storing feedback:', error);

    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error: error.message,
    });
  }
};

module.exports = handleFeedback;
