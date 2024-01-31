// src/components/Textbox.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

const Textbox = ({ text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'textbox', // Define a type for the drag source
    item: { type: 'textbox', text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: '1px solid #000',
        padding: '10px',
        margin: '10px',
      }}
    >
      {text}
    </div>
  );
};

export default Textbox;
