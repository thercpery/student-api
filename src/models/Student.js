const mongoose = require('mongoose');

module.exports = mongoose.model('Student', new mongoose.Schema({
  studentNo: {
    type: String,
    required: [true, 'Student number is required'],
  },
  name: {
    type: String,
    required: [true, 'Student name is required'],
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
  },
}));
