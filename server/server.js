const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./models/dbConnect');
const registerRouter = require('./routes/registration');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connectDb();

// Middleware
app.use(cors());
app.use(express.json()); // Replaces body-parser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/', registerRouter);
// http://localhost:3000/api/v1/register

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
});
