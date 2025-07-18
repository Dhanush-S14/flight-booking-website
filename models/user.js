const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    studentId: { type: String, required: true },
    university: { type: String, required: true },
    password: { type: String, required: true },
    trips: { type: Array, default: [] }
});

module.exports = userSchema;