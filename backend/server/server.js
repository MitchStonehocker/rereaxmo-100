// backend/server.js

const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')

const config = require('./config/DB')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(config.DB).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
)
const noteroutes = require('./routes/NoteRoute')

app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 4000

app.use('/notes', noteroutes)

const server = app.listen(port, function () {
  console.log('Listening on port ' + port)
})
