// src/index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import rootReducer from './reducers'
import { fetchAllNotes } from './actions/index'

import * as serviceWorker from './serviceWorker'

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, allStoreEnhancers)

store.dispatch(fetchAllNotes())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
