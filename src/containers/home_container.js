import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { randomImage } from '../actions';
import { bindActionCreators } from 'redux';

import RandomDogImg from '../components/randomImg'

class HomeContainer extends Component { 

    componentWillMount() {
        this.props.randomImage()
    }

    handleFetch = () =>{
        this.props.randomImage()
      }

    render(){    
        return (
            <div>
              <Link to="/breedsList">Breed List</Link><br/>
              <button onClick={ this.handleFetch } >Fetch</button>
              <RandomDogImg dogBreed={this.props.dogBreed} />
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
    return bindActionCreators({randomImage},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)