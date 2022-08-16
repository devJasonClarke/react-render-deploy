import { useState } from "react";
import reactLogo from "./assets/react.svg";
import renderLogo from "./assets/render.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <span className="logo">
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </span>
        <a href="https://render.com/" target="_blank">
          <img src={renderLogo} className="logo render" alt="Render logo" />
        </a>
      </div>
      <h1>Vite + React + Render</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Fork repositiory from{" "}
          <a
            href="https://github.com/devJasonClarke/react-render-deploy"
            target="_blank"
          >
            here
          </a>
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </div>
  );
}

export default App;
