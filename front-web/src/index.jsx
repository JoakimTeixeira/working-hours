import React from 'react';
import ReactDOM from 'react-dom';
import { TimeContextProvider } from 'contexts/TimeContext';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

ReactDOM.render(
  <React.StrictMode>
    <TimeContextProvider>
      <App />
    </TimeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
