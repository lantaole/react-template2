import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => <h1>My React and TypeScript App oh 1234 test {new Date().toLocaleDateString()}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
