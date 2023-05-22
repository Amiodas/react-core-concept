import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default Counter;
