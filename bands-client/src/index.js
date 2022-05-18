import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import './index.css'
import {retrieveBands} from './features/bands/bandsSlice'
//import {retrievePlayers} from './features/players/playersSlice'
import { retrieveAdmins } from './features/admin/adminSlice';

store.dispatch(retrieveAdmins());
store.dispatch(retrieveBands());

/*
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
*/


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
//</React.StrictMode>
);
