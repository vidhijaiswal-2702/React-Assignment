import React, { useState } from 'react';

function ToggleParagraph() {
  const [visible, setVisible] = useState(true); //para initially visible by default

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {/* Button toggles visible state between true and false */}
        
        {visible ? 'Hide' : 'Show'} Paragraph 
      </button>
     
      {visible && <p>This paragraph is now visible.</p>}
      {/* Conditional rendering: show paragraph only when visible is true */}
    </div>
  );
}

export default ToggleParagraph;
