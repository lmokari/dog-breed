import axios from 'axios';
const URL = 'https://dog.ceo/api/breeds/image';


export function randomImage(){
    const request = axios.get(`${URL}/random`)
                    .then(response => response.data)
    return {
        type: 'GET_RANDOM_IMG',
        payload: request
    }
}
