import React from "react";
import ReactDOM from 'react-dom/client';

// style
import "./assets/styles/scss/main.scss";

// components
import App from "./components/App/App.jsx";


import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
