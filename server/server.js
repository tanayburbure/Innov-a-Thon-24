const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./models/dbConnect');

const Team = require('./models/Participant'); // Import the Team model

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDb();

// Start the Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
