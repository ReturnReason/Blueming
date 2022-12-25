const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 20,
  },
  password: {
    type: String,
    trim: true,
    minLength: 5,
  },
  email: {
    type: String,
    unique: 1,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
