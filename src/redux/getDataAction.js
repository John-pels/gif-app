import {GET_GIF_ACTION, GET_GIF_NOT_FOUND} from '../redux/actionTypes'


const getGifAction = payload => {
    return  {
        type: GET_GIF_ACTION,
        data: payload.data
    }
}

const getGifNotFound = message => {
    return{
        type: GET_GIF_NOT_FOUND,
        message
    }
}



export const getData = (keyword) => {
    const apiKey = "OYa73aJOBfbenMLiAav9ZXswodSdoTTW";
    const url = "https://api.giphy.com/v1/gifs/search?api_key=";

    return async dispatch => {
    await fetch(`${url}${apiKey}&q=${keyword}&limit=25&offset=0&rating=G&lang=en`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        // .then(response =>
        //     response.status = '200' ?
        //     dispatch(getGifAction(response.data)): dispatch(getGifNotFound(`${keyword} Not Found!`)))
        .then(data =>{console.log(data)})
        
    }
}
