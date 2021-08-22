



import { db } from "../../config/Firebase";
import { FETCH_HOTELS , ADD_HOTEL } from "../type/Type"; 


export const fetchHotels =  (setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        let snapshot = await db.collection('hotels').get() ;
        let hotels = [] ;
        snapshot.forEach((doc)=>{
            hotels.push({
                docID: doc.id ,
                ...doc.data(),
            })
        })

    console.log("Data fetch from firestore" , hotels);
        dispatch({
            type: FETCH_HOTELS ,
            payload: hotels
        })


        
    } catch (error) {
        console.log("Error in Fetching Hotels" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}


export const addHotel =  (data ,setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        await db.collection('hotels').add(data) ;
        
        

    console.log("Data Added into  firestore" );
        dispatch({
            type: ADD_HOTEL ,
            payload: data
        })


        
    } catch (error) {
        console.log("Error in Adding Dish" , error);
        alert("Error At Add Dish" , error)
    }

    finally{
        setLoading(false)
    }
}
