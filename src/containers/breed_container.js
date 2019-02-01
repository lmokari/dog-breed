import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BreedImages from '../components/breedImages';
import {Links}  from '../ui/Link';

class BreedContainer extends React.Component {
  componentWillMount() {
    this.props.breedImages(this.props.match.params.breed)
}

  render() {
    return (
      <div>
        <Links as={ Link } to="/breedsList" >back to Breed list</Links><br/>
        <BreedImages dogBreed={this.props.dogBreed} />
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      dogBreed:state.dogBreed
    }   
}

export default connect(mapStateToProps, actions)(BreedContainer)
