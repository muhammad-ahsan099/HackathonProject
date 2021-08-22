

import { db } from "../../config/Firebase";
import { FETCH_CITIES } from "../type/Type"; 


export const fetchCities =  (setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        let snapshot = await db.collection('city').get() ;
        let cities = [] ;
        snapshot.forEach((doc)=>{
            cities.push({
                docID: doc.id ,
                ...doc.data(),
            })
        })

    console.log("Data fetch from firestore" , cities);
        dispatch({
            type: FETCH_CITIES ,
            payload: cities
        })


        
    } catch (error) {
        console.log("Error in Fetching Students" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}


