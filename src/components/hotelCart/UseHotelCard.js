

import {useEffect, useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';

import { fetchHotels } from '../../redux/actions/HotelAction';

export function UseHotelCard()
{
    


    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    


    const hotels = useSelector(state=>state.HotelReducer.hotels)

    console.log("students from CitiesReducer",hotels);


    useEffect( ()=> {

        dispatch(fetchHotels(setLoading))

    } , [])



  
    return[hotels ,loading ]
}