import React from 'react';


function UserDetails({ email, age, location }) {    // recieving a part of data and displaying them 
  return (
    <div>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default UserDetails;