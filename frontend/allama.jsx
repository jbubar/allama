import React from 'react';
import createStore from 'react-redux'
import ReactDOM from 'react-dom';
import App from './app';

document.addEventListener("DOMContentLoaded", () => {
    const store = createStore()
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})