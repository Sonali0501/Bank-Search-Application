import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store=createStore(reducers,persistedState,composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);