import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RandomDogImg from '../components/randomImg';
import {BlueButton}  from '../ui/Button';
import {Links}  from '../ui/Link';





const HomeContainer = ({ dogBreed, randomImage, allBreedList }) => {
    return(  <div>
        <Links as= {Link} to="/breedsList" prefetch onClick={ allBreedList }>Breed List</Links>
        <BlueButton onClick={ randomImage } >Fetch</BlueButton>
        <RandomDogImg dogBreed={ dogBreed } />
       </div>)
}

function mapStateToProps(state){
    return {
      dogBreed:state.dogBreed
    }   
}

export default connect(mapStateToProps, actions)(HomeContainer)