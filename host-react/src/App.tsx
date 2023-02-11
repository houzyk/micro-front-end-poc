import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import RemoteReactApp from "remote_react/RemoteReactApp";
import VueWrapper from "remote_vue3/Wrapper";

const App = () => {

  const vueAppRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    VueWrapper(vueAppRef.current);
  }, [vueAppRef]);

  return (
    <div className="container">
      <div>Name: host-react</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <RemoteReactApp />
      <div ref={vueAppRef}/>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
