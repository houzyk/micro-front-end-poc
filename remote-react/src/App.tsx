import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: remote-react</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
