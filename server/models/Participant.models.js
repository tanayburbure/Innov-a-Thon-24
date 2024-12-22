const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true
  },
  age: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
    lowercase:true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
    lowercase: true, 
  },
  mobile: {
    type: String,
    required: true,
  },
});

const TeamSchema = new mongoose.Schema({
  participants: {
    type: [ParticipantSchema],
    validate: {
      validator: function (v) {
        return v.length === 4; // Ensure exactly 4 participants
      },
      message: 'A team must have exactly 4 participants.',
    },
  },
},{timestamps:true});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;

