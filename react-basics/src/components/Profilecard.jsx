import React from 'react';
import "./Profilecard.css";

const Profilecard = ({ name,image,bio }) => {
  return (
    <div className='user-container'>
  <img id="user-image" src={image} alt="Profile" />
  <h2 id="user-name">{name}</h2>
  <p>B.S City</p>
  <p id="user-desc">{bio}</p>
  

</div>

  );
}

export default Profilecard;
