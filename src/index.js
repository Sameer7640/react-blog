import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App, {Application} from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);