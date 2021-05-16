import React from 'react'
import {auth,provider} from "./fb"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function LoginScreen() {

    const [state, dispatch] = useStateValue()
    const signIn=()=>{
        
        auth.signInWithPopup(provider).then(result =>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
           
        }).catch((error)=>alert(error.message))
    }
    return (
        <div className="grid place-items-center h-full " >
            <div className="flex flex-col" >
                <img className="object-contain h-36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
                 alt="img-logo" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/294px-Facebook_Logo_%282019%29.svg.png" 
                  alt="img-text" />

                  
            </div>

            <button style={{outline:"none"}} type="submit" onClick={signIn}  className="  font-extrabold w-72  bg-blue-600 text-white p-3 rounded-xl hover:bg-white hover:text-blue-400   "  >Sign in</button>
        </div>
    )
}

export default LoginScreen
