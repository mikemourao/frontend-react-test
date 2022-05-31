import React from 'react';
import ReactDOM from 'react-dom';
import './theme/antd.light.css'
import './theme/global.css'
import App from './components/templates/App';

ReactDOM.render(
  <React.StrictMode>
    { <App  /> }
  </React.StrictMode>,
  document.getElementById('root')
);