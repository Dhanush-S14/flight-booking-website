const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    airline: String,
    flightNumber: String,
    departure: String,
    destination: String,
    price: Number,
    date: String
});

module.exports = flightSchema;