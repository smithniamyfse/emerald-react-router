import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  // History is a record of everywhere we've been
  // The last entry in the array is where we are now
  const history = useHistory();

  const handleClick = () => {
    // change location! Push '/animals' onto the END of the ARRAY 
    // To change where we are, we will just push a new location to the array!
    history.push('/animals');
  }

  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <p>
      <button onClick={handleClick}>🦁 Go To Animals 🐸</button>
      </p>
    </div>
  );
}

export default Home;
