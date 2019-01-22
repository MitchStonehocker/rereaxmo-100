// src/components/NewNote.js

import React from 'react'

class NewNote extends React.Component {
  state = {
    title: '',
    category: '',
    body: '',
    timestamp: ''
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (
      this.state.title.trim() &&
      this.state.body.trim() &&
      this.state.title.length > 0
    ) {
      this.props.onAddNote(this.state)
      // this.handleReset()
    } else {
      alert('add title and body...')
    }
  }

  handleReset = () => {
    this.setState({
      title: '',
      category: '',
      body: '',
      timestamp: ''
    })
  }

  render () {
    console.log('this.state.buttonActive', this.state.buttonActive)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Title'
              className='form-control'
              name='title'
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Category'
              className='form-control'
              name='category'
              onChange={this.handleInputChange}
              value={this.state.note}
            />
          </div>
          <div className='form-group'>
            <textarea
              cols='19'
              rows='8'
              placeholder='Note'
              className='form-control'
              name='body'
              onChange={this.handleInputChange}
              value={this.state.note}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Timestamp'
              className='form-control'
              name='timestamp'
              onChange={this.handleInputChange}
              value={this.state.note}
            />
          </div>
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={!this.state.title && !this.state.body}
            >
              Add Note
            </button>
            <button
              type='button'
              className='btn btn-warning'
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewNote
