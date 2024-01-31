// src/components/Textbox.jsx
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

// Textbox component for draggable and editable text boxes
const Textbox = ({ id, text, position, onTextChange }) => {
  // State to manage the editable text content
  const [editableText, setEditableText] = useState(text);

  // useDrag hook from react-dnd to make the component draggable
  const [, drag] = useDrag({
    type: 'textbox',  // Type used for identifying the draggable item
    item: { id },     // Unique identifier for the dragged item
  });

  // Handle text change in the input field
  const handleTextChange = (e) => {
    setEditableText(e.target.value);
    onTextChange(id, e.target.value);  // Notify the parent component about text change
  };

  // Render the draggable text box with an editable input field
  return (
    <div
      ref={drag}  // Attach the drag ref to make the component draggable
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        cursor: 'move',
        border: '1px solid #000',
        padding: '10px',
        margin: '10px',
      }}
    >
      <input
        type="text"
        value={editableText}
        onChange={handleTextChange}
        style={{ width: '100%', border: 'none', outline: 'none' }}
      />
    </div>
  );
};

export default Textbox;
