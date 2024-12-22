const { z } = require('zod');

// Zod schema for a single participant
const ParticipantSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  age: z.number().int().positive().max(120, "Invalid age."), // Age is a number
  college: z.string().min(1, "College is required."),
  gender: z.enum(['male', 'female', 'other']),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Invalid mobile number."), // Mobile is a string with regex
});

// Zod schema for a team
const TeamSchema = z.object({
  participants: z
    .array(ParticipantSchema)
    .length(4, "A team must have exactly 4 participants."),
  createdAt: z.date().optional(), // Optional, as Mongoose sets a default value
});

const feedbackSchema = z.object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email("Invalid email address."),
    message:z.string().min(1, "Feedback is required."),
  });

module.exports = { ParticipantSchema, TeamSchema , feedbackSchema };
