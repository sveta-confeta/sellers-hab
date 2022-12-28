import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Gilroy-Bold.woff';
import './fonts/Gilroy-Bold.woff2';
import './fonts/Gilroy-Medium.woff';
import './fonts/Gilroy-Medium.woff2';
import './fonts/Gilroy-Regular.woff';
import './fonts/Gilroy-Regular.woff2';
import './fonts/Gilroy-SemiBold.woff';
import './fonts/Gilroy-SemiBold.woff2';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
