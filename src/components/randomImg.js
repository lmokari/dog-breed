import React from 'react';

const RandomImg = (props) =>{
    return (
        <div>
            { props.dogBreed.randomImg && props.dogBreed.randomImg.length > 0 ?
                <img src= { props.dogBreed.randomImg } alt="" /> 
                : null
            }
    
        </div>
    )
}

export default RandomImg;