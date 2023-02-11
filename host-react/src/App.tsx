import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import RemoteReactApp from "remote_react/RemoteReactApp";

const App = () => (
  <div className="container">
    <div>Name: host-react</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <RemoteReactApp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
