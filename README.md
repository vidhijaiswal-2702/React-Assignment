
# React Assignments – Manual Switching

This React project contains multiple assignment components (Assignment 1 and Assignment 2), each demonstrating different core concepts of React like props, state, and event handling.

## 📁 Project Structure

``bash
src/
├── App1.jsx # Props and nested components
├── App2.jsx # useState and event handling
├── main.jsx # Entry point where manual switching happens
├── components1/
│ ├── UserCard.jsx
  ├── UserDetails.jsx
├── components1/ 
│ ├── Counter.jsx
│ ├── LiveInput.jsx
│ └── ToggleParagraph.jsx

``

# Switching Between Assignments
To view Assignment 1 or Assignment 2, manually update the import in main.jsx:

``bash
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// ✅ For Assignment 1:
// import App from './App1.jsx';

// ✅ For Assignment 2:
import App from './App2.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
``
# What Each Assignment Covers
Assignment 1: Props and Nested Functional Components (User Profile Card)

Assignment 2: useState, Event Handling, Conditional Rendering (Counter, Live Input, Toggle)

--