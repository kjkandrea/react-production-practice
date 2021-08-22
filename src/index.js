import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DefaultLayout from './views/layout/DefaultLayout'
import Products from './views/Products'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout page={Products}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
