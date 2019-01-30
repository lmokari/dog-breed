import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RandomDogImg from '../components/randomImg'

const HomeContainer = ({ dogBreed, randomImage }) => {
    return(  <div>
            <Link to="/breedsList">Breed List</Link><br/>
            <button onClick={ randomImage } >Fetch</button>
            <RandomDogImg dogBreed={ dogBreed } />
       </div>)
}

function mapStateToProps(state){
    return {
      dogBreed:state.dogBreed
    }   
}

export default connect(mapStateToProps, actions)(HomeContainer)