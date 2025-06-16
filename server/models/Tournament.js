const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teams: { type: [String], required: true },
  bracket: { type: Object, required: true },
  startDate: { type: Date, required: true }
});

module.exports = mongoose.model('Tournament', TournamentSchema);