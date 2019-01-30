import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BreedsList from '../components/breedsList';

const BreedsListContainer = ({ dogBreed, allBreedList }) => {
     return (
        <div>
            <Link to="/">Back to home</Link><br/>
            <BreedsList  dogBreed={ dogBreed } />
        </div>
        )
}

function mapStateToProps(state){
    return {
        dogBreed:state.dogBreed
    }
}
export default connect(mapStateToProps,actions)(BreedsListContainer)