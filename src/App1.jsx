  import React from 'react';
  import './App.css';
  import UserCard from './components1/UserCard';

  function App() {
    const user = {
      name: 'John Doe',
      age: 30,
      email: 'john@gmail.com',
      location: 'India'
    }

    return (
      
      <div className="app">
        <h1 className="app-h1">Assignment 1:Nested Functional Components with Props </h1>
        <h2>User Profile</h2>
        <UserCard user={user} />  
      </div>
        
    );
  } // Passing user object as a prop to UserCard component

  export default App
