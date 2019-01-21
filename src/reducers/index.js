import { combineReducers } from 'redux';
import dogBreed from './breeds_reducer';

const rootReducer = combineReducers({
    dogBreed
})

export default rootReducer;