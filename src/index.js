import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {setupMSW} from "./mocks/browser";
import store from "./store";
import { Provider } from "react-redux";
import  Routes  from './route'
import { HashRouter } from "react-router-dom";

setupMSW().then(() =>
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>

    , document.getElementById('root'))
)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
