import React, { Component } from 'react'
import CreateNote from './containers/CreateNote'
import NoteList from './containers/NoteList'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const stylesApp = {
  marginTop: 10
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>header</header>
        <main className='App-main'>
          <div className='container'>
            <div className='row' style={stylesApp}>
              <div className='col-md-6'>
                <CreateNote />
              </div>
              <div className='col-md-6'>
                <NoteList />
              </div>
            </div>
          </div>
        </main>
        <footer className='App-footer'>footer</footer>
      </div>
    )
  }
}

export default App
