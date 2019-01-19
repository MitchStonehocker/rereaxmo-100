// src/containers/NoteList.js

import React from 'react'
import { connect } from 'react-redux'
import Note from '../components/Note'
import { deleteNote } from '../actions'

// use _id - mongoose unique key
function NoteList ({ notes, onDelete }) {
  console.log('in NoteList - notes ===> ', notes)
  return (
    <div>
      {notes.map(note => {
        return <Note key={note._id} note={note} onDelete={onDelete} />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteNote(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)
