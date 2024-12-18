const express = require('express')
app.post('/api/register', async (req, res) => {
    try {
      const { participants } = req.body;
  
      if (!participants || participants.length !== 4) {
        return res
          .status(400)
          .json({ success: false, message: 'Please provide data for exactly 4 participants.' });
      }
  
      const team = new Team({ participants });
      await team.save();
  
      res.status(201).json({
        success: true,
        message: 'Team registered successfully!',
        team,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to register the team. Please try again.',
      });
    }
  });
  