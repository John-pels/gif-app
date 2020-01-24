import {GET_GIF_ACTION, GET_GIF_NOT_FOUND} from './actionTypes';


const initialState = {
   data: [{  }],
   gifNotFound: ""
}

export default (state = initialState, action) => {

    switch(action.type){
        case GET_GIF_ACTION:
            return {
                ...state,
                data: action.data,
                gifNotFound: ""
            };
            case GET_GIF_NOT_FOUND:
                return {
                    ...state,
                    gifNotFound: action.message
                }

            default: 
            return state
    }
}
