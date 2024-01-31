// src/components/DragContainer.js
import React from 'react';
import { useDrop } from 'react-dnd';
import Textbox from '../components/Textbox';

const DragContainer = ({ textboxes, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'textbox',
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} style={{ width: '100%', height: '100vh', padding: '20px' }}>
      {textboxes.map((text, index) => (
        <Textbox key={index} text={text} />
      ))}
    </div>
  );
};

export default DragContainer;
