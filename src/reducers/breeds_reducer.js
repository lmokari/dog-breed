export default function(state={},action){

  switch(action.type){
    case 'GET_RANDOM_IMG':
       return {...state,randomImg:action.payload}
    case 'GET_BREED_LIST':
       return {...state,breedList:action.payload}
    case 'GET_BREED_IMAGES':
       return {...state,breedImages:action.payload}
    default:
    return state;
  }

}