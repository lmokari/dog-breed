import React from 'react';

const BreedImages = (props) =>{

    return (
            <ul>
            { props.dogBreed.breedImages && props.dogBreed.breedImages.length > 0 ?
               props.dogBreed.breedImages.map( item => (
                   <li key={item}>
                       <img src={item} alt="" />
                    </li>
               )): null
                }
            </ul>
    )
}

export default BreedImages;