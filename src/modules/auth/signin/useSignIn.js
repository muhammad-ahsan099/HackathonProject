

 
import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { doLogin } from '../../../redux/actions/AuthAction';



export default function useSignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()


    const doLoginUser = ()=>{
        dispatch(doLogin(email,password))
    }

    

    return [ email , password,   setEmail,setPassword,doLoginUser]
}