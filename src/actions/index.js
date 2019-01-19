// src/actions/index.js

import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from './types'
import axios from 'axios'

const apiUrl = 'http://localhost:4000/notes'

export const createNote = ({ title, category, body, timestamp }) => {
  console.log(
    'title, category, body, timestamp',
    title,
    category,
    body,
    timestamp
  )
  return dispatch => {
    return axios
      .post(`${apiUrl}/add`, { title, category, body, timestamp })
      .then(response => {
        dispatch(createNoteSuccess(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}

export const createNoteSuccess = data => {
  return {
    type: ADD_NOTE,
    payload: {
      _id: data._id,
      title: data.title,
      category: data.category,
      body: data.body,
      timestamp: data.timestamp
    }
  }
}

export const deleteNoteSuccess = id => {
  return {
    type: DELETE_NOTE,
    payload: {
      id
    }
  }
}

export const deleteNote = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteNoteSuccess(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}

export const fetchNotes = notes => {
  return {
    type: FETCH_NOTE,
    notes
  }
}

export const fetchAllNotes = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchNotes(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}
