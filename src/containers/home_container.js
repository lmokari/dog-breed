import React, { Component } from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { randomImage } from '../actions';

class HomeContainer extends Component { 

    componentWillMount() {
        this.props.randomImage()
    }

    render(){
        console.log(this.props.randomImage)      
        return (
            <div>
              <button onClick={ this.props.randomImage() } >Fetch</button>
            </div>
        )
    }
    
}


function mapStateToProps(state){
    return {
      randomImage:state.randomImage
    }
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({randomImage},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)