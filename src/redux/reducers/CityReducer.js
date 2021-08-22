

import { FETCH_CITIES} from "../type/Type";

let initialState = {
    error: '',
    cities: []
}


function citiesReducer(state = initialState, action) {

    switch (action.type) {

        case FETCH_CITIES:
            console.log("Data in Reducer from Fetch Action: ", action.payload);
            return {
                ...state,
                cities: action.payload
            }



        default:
            return state;
    }
}

export default citiesReducer;