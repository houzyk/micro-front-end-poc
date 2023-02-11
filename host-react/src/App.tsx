import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import RemoteReactApp from "remote_react/RemoteReactApp";
import RemoteVanillaWrapper from "remote_vanilla/RemoteVanillaApp";
import VueWrapper from "remote_vue3/Wrapper";

const App = () => {

  const vueAppRef = useRef<HTMLDivElement>(null);
  const VanillaAppRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    VueWrapper(vueAppRef.current);
    RemoteVanillaWrapper(VanillaAppRef.current)
  }, [vueAppRef]);

  return (
    <div className="container">
      <div>Name: host-react</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <RemoteReactApp />
      <div ref={vueAppRef}/>
      <div ref={VanillaAppRef}/>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
