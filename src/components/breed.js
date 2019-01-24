import React from 'react';

import BreedContainer from '../containers/breed_container';

const Breed = (props) =>{
  return (
    <div>
      <BreedContainer {...props} />
    </div>
  )
}

export default Breed;