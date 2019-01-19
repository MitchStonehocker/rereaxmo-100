// src/containers/CreateNote.js

import { connect } from 'react-redux'
import { createNote } from '../actions'
import NewNote from '../components/NewNote'

const mapDispatchToProps = dispatch => {
  return {
    onAddNote: note => {
      dispatch(createNote(note))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewNote)
