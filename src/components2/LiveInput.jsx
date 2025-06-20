import React, { useState } from 'react';

function LiveInput() {
  const [text, setText] = useState('');  //initially empty string as input value 

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default LiveInput;

/* 
setText() → Updates the text every time you type.

onChange={(e) => setText(e.target.value)}:

e stands for the event object.

e.target.value gets the current value of the input box.

So this function updates the state with what you type
*/ 
