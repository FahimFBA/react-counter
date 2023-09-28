import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter Project</h1>
      <button onClick={increase}>Increase Count</button>
      <button onClick={decrease}>Decrease Count</button>
      <button onClick={setToZero}>Set to Zero (0)</button>
      <div style={{ fontSize: "25px" }}>{count}</div>
    </div>
  );
}

export default App;
