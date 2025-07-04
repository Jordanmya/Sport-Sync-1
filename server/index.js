const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const tournamentRoutes = require('./routes/tournaments');

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tournaments', tournamentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));