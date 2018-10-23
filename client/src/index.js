import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./stores/UiStore";


const Root = (
  
  <App store={store} />

);

ReactDOM.render(Root, document.getElementById("root"));
registerServiceWorker();
