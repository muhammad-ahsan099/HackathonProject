

import {combineReducers} from 'redux';
import CityReducer from './reducers/CityReducer';
import AuthReducer from './reducers/AuthReducer'
import HotelReducer from './reducers/HotelReducer';

const rootReducer =   combineReducers({

    CityReducer  ,
    HotelReducer,
    AuthReducer
})

export default rootReducer;