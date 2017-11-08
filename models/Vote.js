const mongoose = require('mongoose');
const Schema = mongoose.Schema

const votesSchema = new Schema({
  jenis_kelamin: {
    type: String,
    required: true
  },
  kepuasan_booth: {
    type: String,
    required: true
  }
},{
  timestamps: true
})

const Vote = mongoose.model('Vote', votesSchema)

module.exports = Vote
