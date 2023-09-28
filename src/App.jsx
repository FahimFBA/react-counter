import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter Project</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to Zero (0)
      </button>
      <div style={{ fontSize: "25px" }}>{count}</div>
    </div>
  );
}

export default App;
