import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, CreateStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies);
console.log('state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

