// src/index.js or src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';

// Create a root using React 18's createRoot API
const root = createRoot(document.getElementById('root'));

// Render the app within the root using DndProvider for drag-and-drop support
root.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
);
