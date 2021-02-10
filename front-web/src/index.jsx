import React from 'react';
import ReactDOM from 'react-dom';
import { TimeContextProvider } from 'contexts/TimeContext';
import App from './App';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';

ReactDOM.render(
  <React.StrictMode>
    <TimeContextProvider>
      <App />
    </TimeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
