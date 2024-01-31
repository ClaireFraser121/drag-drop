// src/App.jsx
import React, { useState } from 'react';
import DragContainer from './containers/DragContainer';

// App component as the main container for the Newspaper App
const App = () => {
  // State to manage an array of textboxes with initial data
  const [textboxes, setTextboxes] = useState([
    { id: 1, text: 'Textbox 1' },
    { id: 2, text: 'Textbox 2' },
  ]);

  // Handle drop event when a textbox is dropped inside the container
  const handleDrop = (item) => {
    // Filter out the dropped item from the original array
    const updatedTextboxes = textboxes.filter((textbox) => textbox.id !== item.id);
    setTextboxes(updatedTextboxes);
  };

  // Handle text change event in a textbox
  const handleTextChange = (id, newText) => {
    // Update the text in the array when the text changes
    const updatedTextboxes = textboxes.map((textbox) =>
      textbox.id === id ? { ...textbox, text: newText } : textbox
    );
    setTextboxes(updatedTextboxes);
  };

  // Render the main container with the Newspaper App components
  return (
    <div>
      <h1>Newspaper App</h1>
      {/* Render the DragContainer component with the array of textboxes and event handlers */}
      <DragContainer textboxes={textboxes} onDrop={handleDrop} onTextChange={handleTextChange} />
    </div>
  );
};

export default App;
