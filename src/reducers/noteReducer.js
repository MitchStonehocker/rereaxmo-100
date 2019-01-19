// src/reducers/noteReducer.js

import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from '../actions/types'

export default function noteReducer (state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload]
    case DELETE_NOTE:
      return state.filter(note => note._id !== action.payload.id)
    case FETCH_NOTE:
      return action.notes
    default:
      return state
  }
}
