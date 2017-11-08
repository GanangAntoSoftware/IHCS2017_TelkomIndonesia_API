const Vote = require('../models/Vote');

module.exports = {
  create: (req, res) => {
    Vote.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.error(err))
  },
  all: (req, res) => {
    Vote.find()
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  allSangatPuas: (req, res) => {
    Vote.find({ kepuasan_booth: 'sangat puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  allPuas: (req, res) => {
    Vote.find({ kepuasan_booth: 'puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  allTidakPuas: (req, res) => {
    Vote.find({ kepuasan_booth: 'tidak puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  female: (req, res) => {
    Vote.find({ jenis_kelamin: 'perempuan' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  femaleSangatPuas: (req, res) => {
    Vote.find({ jenis_kelamin: 'perempuan', kepuasan_booth: 'sangat puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  femalePuas: (req, res) => {
    Vote.find({ jenis_kelamin: 'perempuan', kepuasan_booth: 'puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  femaleTidakPuas: (req, res) => {
    Vote.find({ jenis_kelamin: 'perempuan', kepuasan_booth: 'tidak puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  male: (req, res) => {
    Vote.find({ jenis_kelamin: 'laki-laki' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  maleSangatPuas: (req, res) => {
    Vote.find({ jenis_kelamin: 'laki-laki', kepuasan_booth: 'sangat puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  malePuas: (req, res) => {
    Vote.find({ jenis_kelamin: 'laki-laki', kepuasan_booth: 'puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  },
  maleTidakPuas: (req, res) => {
    Vote.find({ jenis_kelamin: 'laki-laki', kepuasan_booth: 'tidak puas' })
      .then(data => res.send(data))
      .catch(err => console.error(err))
  }
}
