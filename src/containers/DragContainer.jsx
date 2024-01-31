// src/containers/DragContainer.jsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Textbox from '../components/Textbox';

// DragContainer component for handling textboxes and drop events
const DragContainer = ({ textboxes, onTextChange }) => {
  // State to store the positions of textboxes
  const [positions, setPositions] = useState({});

  // useDrop hook to handle drop events
  const [, drop] = useDrop({
    accept: 'textbox',
    drop: (item, monitor) => {
      // Get the difference from the initial offset for positioning
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      // Update positions in state
      setPositions((prevPositions) => ({ ...prevPositions, [item.id]: { left, top } }));
    },
  });

  // Handle text change event in a textbox
  const handleTextChange = (id, newText) => {
    onTextChange(id, newText);
  };

  // Render the container with drop functionality and textboxes
  return (
    <div ref={drop} style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {textboxes.map((textbox) => (
        <Textbox
          key={textbox.id}
          id={textbox.id}
          text={textbox.text}
          position={positions[textbox.id] || { x: 0, y: 0 }}
          onTextChange={handleTextChange}
        />
      ))}
    </div>
  );
};

export default DragContainer;
