
import {useEffect, useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';

import {storage} from '../../config/Firebase';
import {addHotel} from "../../redux/actions/HotelAction";

export function UsePost()
{
    
    const [errMessage , setMessage] = useState("");
    const [flag , setFlag] = useState(false)
    const [updatedIndex , setUpdatedIndex] = useState(0);
    // New Hooks Defined
    const [load, setLoading] = useState(false);
    const [ctaLoading, setCtaLoading] = useState(false);

    const dispatch = useDispatch();
    

    const [category , setCategory] = useState("")
    const [name , setName] = useState("");
    const [description , setDescription] = useState("");
    const [price , setPrice] = useState("");
    const [fileUrl, setFileUrl] = useState(null);
    const [location , setLocation] = useState("")
    const [deltype , setDeltype] = useState("")
 

    // const products = useSelector(state=>state.studentReducer.products)
    // console.log("students from studentReducer",products);

    // Function for Storage 
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child('/uploaded').child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
      };
      console.log('Upload Image: ' , fileUrl);

    const ctaHandler = ()=> {

        setMessage("")  

        if( category !== "" && name !== "" && description !== "" && price !== "" && location !== "" && deltype !== "")
        {  
        let hotel = {
        category ,
        name,
        description,
        price  ,
        image: fileUrl ,
        location,
        deltype,
        createdAt: new Date()

        }

        console.log('Product Data at ctaHandler:  '  , hotel);
        dispatch(addHotel(hotel, setCtaLoading))
        

        setCategory("")
        setName("");
        setDescription("");
        setPrice("");
        setFileUrl("")
        setLocation("");
        setDeltype("")

    }

        else
        {
            setMessage("Error:  Some Inputs are Empty");
        }

    } 

    return [errMessage  , flag  ,category , name , description , price, location , deltype ,load ,ctaLoading , setCategory,setName ,setDescription , setPrice ,setLocation, setDeltype , onFileChange , ctaHandler ]

   
}
