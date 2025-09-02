const express = require('express');
const Idea = require('../models/Idea');
const router = express.Router();

// Create a new idea
router.post('/ideas', async (req, res) => {
  const newIdea = new Idea(req.body);
  try {
    const savedIdea = await newIdea.save();
    res.status(201).json(savedIdea);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all ideas
router.get('/ideas', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;