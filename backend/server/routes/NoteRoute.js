// backend/server/routes/NoteRoute.js

const express = require('express')
const app = express()
const NoteRoute = express.Router()

// Require Note model in our routes module
let Note = require('../models/Note')

// Defined store route
NoteRoute.route('/add').post(function (req, res) {
  let note = new Note(req.body)
  note
    .save()
    .then(note => {
      res.status(200).json(note)
    })
    .catch(err => {
      res.status(400).send('unable to save to database')
    })
})

// Defined get data(index or listing) route
NoteRoute.route('/').get(function (req, res) {
  Note.find(function (err, notes) {
    if (err) {
      console.log(err)
    } else {
      res.json(notes)
    }
  })
})

// Defined delete | remove | destroy route
NoteRoute.route('/delete/:id').get(function (req, res) {
  Note.findByIdAndRemove({ _id: req.params.id }, function (err, note) {
    if (err) res.json(err)
    else res.json(req.params.id)
  })
})

module.exports = NoteRoute
