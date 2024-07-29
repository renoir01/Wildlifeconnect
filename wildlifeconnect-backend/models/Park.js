const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  activities: [String],
  accommodations: [String]
});

module.exports = mongoose.model('Park', parkSchema);
