import React from 'react';
import UserDetails from './UserDetails';

function UserCard({ user }) {  //recieving user object as a prop -> component composition
  return (
    <div >
      <h2>{user.name}</h2> 
      
      <UserDetails email={user.email}  age={user.age} location={user.location} /> 
    
    </div>
  );
}// displaying user name and passing other details to UserDetails component

export default UserCard;