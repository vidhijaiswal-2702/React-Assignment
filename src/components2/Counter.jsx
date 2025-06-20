import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // initial set count to 0 via usestate
  // useState is a React Hook that lets you add state to functional components

  return (
    <div>
      <p>Count: {count}</p> 
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* on clicking increment -> count+1 */}
      <button onClick={() => setCount(count - 1)}>Decrement</button> {/* on clicking decrement-> count-1 */}
    </div>
  );
}

export default Counter;

// every time when we click button -> react re renders the component.