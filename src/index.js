import React from "react";
import ReactDOM from "react-dom";

// style
import "./assets/styles/css/style.css";

// components
import App from "./components/App/App.jsx";
// import Hero from './components/Hero/Hero.jsx'
// import Media from "./components/Media/Media.jsx";
// import Statistics from "./components/Statistics/Statistics.jsx";
// import CallOut from "./components/CallOut/CallOut.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NavBar />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
