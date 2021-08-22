
import { ADD_HOTEL, FETCH_HOTELS } from "../type/Type";

let initialState = {
    error: '',
    hotels: []
}


function HotelReducer(state = initialState, action) {

    switch (action.type) {

        case FETCH_HOTELS:
            console.log("Data in Reducer from Fetch Action: ", action.payload);
            return {
                ...state,
                name: 'ahsan',
                hotels: action.payload
            }

        case ADD_HOTEL:
            console.log("Data in Reducer for ADD_STUDENT: ", action.payload);
            let newHotels = state.hotels;
            newHotels.push(action.payload)

            return {
                ...state,
                hotels : newHotels,
            }




        default:
            return state;
    }
}

export default HotelReducer;