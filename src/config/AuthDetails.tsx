import { onAuthStateChanged, User } from "firebase/auth";
import React, {useState, useEffect, FC} from "react";
import {auth} from './config'

export const AuthDetails: FC = () =>{

    const [authUser, setAuthUser] = useState<User | null>(null)

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    }, [])

    return(
        <>
        {authUser ? <p>SignIn</p> : <p>Sign Out</p>}
        </>
    )
}