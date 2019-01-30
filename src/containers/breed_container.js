import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BreedImages from '../components/breedImages'

const BreedContainer =  ({dogBreed, breedImages}) => { 
        return (
            <div>
              <Link to="/breedsList">back to Breed list</Link><br/>
              <BreedImages dogBreed={dogBreed} />
            </div>
        )
}

function mapStateToProps(state){
    return {
      dogBreed:state.dogBreed
    }   
}

export default connect(mapStateToProps, actions)(BreedContainer)
