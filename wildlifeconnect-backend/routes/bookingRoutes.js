const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, parkId, date, numberOfPeople } = req.body;
  try {
    const booking = new Booking({ userId, parkId, date, numberOfPeople });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId').populate('parkId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
