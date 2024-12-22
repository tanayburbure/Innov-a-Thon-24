const express = require('express');
const Team = require('../models/Participant.models'); 
const { TeamSchema } = require('../utils/validationSchama'); 

// Controller to handle team registration
const registerTeam = async (req, res, next) => {
    try {
        // Validate request body using Zod
        const validationResponse = TeamSchema.safeParse(req.body);

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

        const { participants } = req.body;

        // Check if the number of participants is exactly 4
        if (!participants || participants.length !== 4) {
            return res.status(400).json({
                success: false,
                message: 'A team must have exactly 4 participants.',
            });
        }

        // Create a new team with the validated participants
        const team = new Team({ participants });
        await team.save();

        // Send success response
        return res.status(201).json({
            success: true,
            message: 'Team registered successfully!',
            data: team,
        });
    } catch (error) {
        // Log the error stack for debugging (in development)
        console.error('Error during team registration:', error);

        // Pass the error to the global error handler
        next(error);
    }
};

module.exports = registerTeam;
