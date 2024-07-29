const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  parkId: { type: Schema.Types.ObjectId, ref: 'Park', required: true },
  date: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
