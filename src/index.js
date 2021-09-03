import React from "react";
import ReactDOM from "react-dom";

// style
import "./assets/styles/css/style.css";

// components
import App from "./components/App/App.jsx";
// import Hero from './components/Hero/Hero.jsx'
import Media from "./components/Media/Media.jsx";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Media />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
