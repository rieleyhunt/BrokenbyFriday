const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const r2Uploader = require('./r2Uploader');
require('dotenv').config();
console.log('R2 Key loaded?', process.env.R2_ACCESS_KEY_ID);

const app = express(); // Creates an Express object
app.use(cors()); // Allows the backend to talk to the front end
app.use(express.json()); // Parse incoming JSON data automatically

app.use('/r2', r2Uploader);

mongoose.connect('mongodb://localhost:27017/bbf', {
 
});

const ConcertSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String,
  photo: String,
});

const Concert = mongoose.model('Concert', ConcertSchema);

app.get('/concerts', async (req, res) => {
  const concerts = await Concert.find();
  res.json(concerts);
});

app.post('/concerts', async (req, res) => {
  const concert = new Concert(req.body);
  await concert.save();
  res.json(concert);
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));