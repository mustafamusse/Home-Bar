import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/globals.css'
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import cocktailModel from "./cocktailModel.js"

const cModel = new cocktailModel();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={"bg-transparent w-full "}>
    <App model ={cModel} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();