const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['practice', 'game'], required: true },
  teamId: { type: String, required: true }
});

module.exports = mongoose.model('Event', EventSchema);