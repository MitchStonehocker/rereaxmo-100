// backend/server/models/Note.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Note
let Note = new Schema(
  {
    title: {
      type: String
    },
    category: {
      type: String
    },
    body: {
      type: String
    },
    timestamp: {
      type: String
    }
  },
  {
    collection: 'notes'
  }
)

module.exports = mongoose.model('Note', Note)
