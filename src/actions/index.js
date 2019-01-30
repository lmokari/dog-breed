import axios from 'axios';
const URL = 'https://dog.ceo/api';


export function randomImage(){
    const request = axios.get(`${URL}/breeds/image/random`)
                    .then(response => response.data.message)
    return {
        type: 'GET_RANDOM_IMG',
        payload: request
    }
}

export function allBreedList(){
    const request = axios.get(`${URL}/breeds/list/all`)
                    .then(response => Object.getOwnPropertyNames(response.data.message))
    return {
        type: 'GET_BREED_LIST',
        payload: request
    }
}

export function breedImages(breed){
    const request = axios.get(`${URL}/breed/${breed}/images`)
                    .then(response => response.data.message)
    return {
        type: 'GET_BREED_IMAGES',
        payload: request
    }
}

