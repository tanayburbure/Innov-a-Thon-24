const express = require('express');
const Participant = require('../controller/participant');
const handleFeedback = require('../controller/feedback');
const router = require('express').Router();

router.post('/register', Participant);
router.post('/feedback',handleFeedback)

module.exports = router
  