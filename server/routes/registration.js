const express = require('express');
const Participant = require('../controller/participant');
const router = require('express').Router();

router.post('/register', Participant);

module.exports = router
  