import React from 'react';

const RandomImg = props =>{
    const { randomImg } = props.dogBreed;
    return (
        <div>
            { randomImg && randomImg.length > 0 && <img src={ randomImg } alt="" /> }
        </div>
    )
}

export default RandomImg;