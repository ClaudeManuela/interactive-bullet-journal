import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export { default as Navigation } from "./components/Navigation";
export { default as Footer } from "./components/Footer";
export { default as Home } from "./components/Home";
export { default as About } from "./components/Todo";
export { default as Contact } from "./components/Braindump";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
