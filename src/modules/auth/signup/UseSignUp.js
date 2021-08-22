
import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { doSignUp } from '../../../redux/actions/AuthAction';


export default function useSignUp() {
    const [fName , setFName ] = useState("")
    const [lName , setLName] = useState("")
    const [phone , setPhone] = useState("")
    const [country , setCountry] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    const doSignupUser = ()=>{

        let user = {
            fName,
            lName,
            phone , 
            country ,
            email ,
            password
        }
        dispatch(doSignUp(user))
    }

    return [ fName,lName,  phone , country, email, password, setFName, setLName ,setPhone, setCountry,  setEmail,setPassword,doSignupUser]
}