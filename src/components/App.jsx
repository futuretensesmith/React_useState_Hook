//must import useState from React module
import React, { useState } from "react";

function App() {
  //destructured: useState sets intial state of count. setCount
  //is function that modifies count
  //setCount is a function that accepts a new state and enqueues a re-render
  //setCount(newSate)

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  // use camelCase onClick like JS instead of normal HTML which would be
  //onclick

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
