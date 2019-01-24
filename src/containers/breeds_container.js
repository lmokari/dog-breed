import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { allBreedList } from '../actions';
import { bindActionCreators } from 'redux';

import BreedsList from '../components/breedsList';

class BreedsListContainer extends Component { 

    componentWillMount() {
        this.props.allBreedList()
        console.log(this.props)
    }

    render(){     
        return (
            <div>
                <Link to="/">Back to home</Link><br/>
                <BreedsList  dogBreed={this.props.dogBreed} />
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
    return bindActionCreators({allBreedList},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(BreedsListContainer)