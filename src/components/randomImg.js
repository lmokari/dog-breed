import React from 'react';

const RandomImg = props => {
    const { randomImg } = props.dogBreed;
    return (
        /** 
         * the `&&` removed the need for a ternary that returns `null`. 
         * Everything right of the `&&` will only run if everything on the left evaluates to true.
         * */ 
        <div>
            { randomImg && randomImg.length > 0 && <img src={ randomImg } alt="" />}
        </div>
    )
}

export default RandomImg;