import React from 'react';
import ReactDOM from 'react-dom';
//import 'Calculator.css';
//import App from './App';
import './index.css'
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <div className="LinhaCorrendo"></div>
    <div className="LinhaCorrendo2"></div>
    <h1>Calculadora</h1>
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  </div>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

