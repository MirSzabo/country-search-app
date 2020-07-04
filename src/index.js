import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import style from "./index.css";

const Countries = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Countries />, document.getElementById("root"));
