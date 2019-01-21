export default function(state={},action){

  switch(action.type){
    case 'GET_RANDOM_IMG':
      return {...state,randomImg:action.payload}
    default:
    return state;
  }

}