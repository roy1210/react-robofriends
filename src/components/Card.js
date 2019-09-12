import React from 'react';

const Card = ({ name, id, email }) => {
  return (
    // dib: responsible with window width
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}200x200' alt='robots`} alt='card' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;