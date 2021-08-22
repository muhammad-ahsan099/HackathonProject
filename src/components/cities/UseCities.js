

import {useEffect, useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';


import { fetchCities} from "../../redux/actions/CityAction";

export function useCities()
{
    


    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    


    const cities = useSelector(state=>state.CityReducer.cities)

    console.log("students from CitiesReducer",cities);


    useEffect( ()=> {

        dispatch(fetchCities(setLoading))

    } , [])



  
    return[cities ,loading ]
}