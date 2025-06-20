import React from 'react';
import Counter from './components2/Counter';
import LiveInput from './components2/LiveInput';
import ToggleParagraph from './components2/ToggleParagraph';

function App() {
  return (
    <div>
      <h1>Assignment 2: Components with State and Event Handling</h1>

      <h2>1. Counter</h2>
      <Counter />

      <h2>2. Live Input</h2>
      <LiveInput />

      <h2>3. Toggle Visibility</h2>
      <ToggleParagraph />
    </div>
  );
}

export default App;
