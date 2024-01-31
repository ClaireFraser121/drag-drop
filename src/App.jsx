// src/App.jsx
import React, { useState } from 'react';
import DragContainer from './containers/DragContainer'; // Update the import path

const App = () => {
  const [textboxes, setTextboxes] = useState(['Textbox 1', 'Textbox 2']);

  const handleDrop = (item) => {
    setTextboxes((prevTextboxes) => [...prevTextboxes, item.text]);
  };

  return (
    <div>
      <h1>Newspaper App</h1>
      <DragContainer textboxes={textboxes} onDrop={handleDrop} />
    </div>
  );
};

export default App;
