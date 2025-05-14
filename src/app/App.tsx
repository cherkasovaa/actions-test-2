import React, { useState } from 'react';

export const App = (): React.JSX.Element => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <h1>Hello world</h1>
      <p>Click count {count}</p>
      <button onClick={increment}>Click on Me</button>
    </>
  );
};
