const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
  index: Number,
  name: String,
  coords: {
    type: {
      lat: Number,
      lng: Number,
      x: Number,
      y: Number,
    },
  },
  objects: [
    {
      index: Number,
      name: String,
      _id: false,
    },
  ],
});

module.exports = mongoose.model('Marker', markerSchema);
