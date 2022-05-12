import React from 'react';
import ReactDOM from 'react-dom/client';
import  { BrowserRouter } from "react-router-dom";

import {StoreContext } from "./context/store-context";
import { User } from "./context/User";

import './index.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const user = new User();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={{
        user
      }}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
