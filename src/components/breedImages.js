import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Img = styled.img`
    max-width: 400px;
`

const BreedImages = (props) =>{
     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            { props.dogBreed.breedImages && props.dogBreed.breedImages.length > 0 ?
               props.dogBreed.breedImages.map( item => (
                <Img src={item} alt="" key={item}/>
               )): null
                }
        </Slider>
    )
}

export default BreedImages;