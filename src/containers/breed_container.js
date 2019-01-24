import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { breedImages } from '../actions';
import { bindActionCreators } from 'redux';

import BreedImages from '../components/breedImages'

class BreedContainer extends Component { 

    componentWillMount() {
        this.props.breedImages(this.props.match.params.breed)
    }

    render(){    
        return (
            <div>
              <Link to="/breedsList">back to Breed list</Link><br/>
              <BreedImages dogBreed={this.props.dogBreed} />
            </div>
        )
    }
    
}


function mapStateToProps(state){
    return {
      dogBreed:state.dogBreed
    }
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({breedImages},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(BreedContainer)