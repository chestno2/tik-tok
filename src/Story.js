import { Avatar } from '@material-ui/core'
import React from 'react'

function Story({image,profilesrc,text}) {
    return (
        <div style={{backgroundImage:`url(${image})` ,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"  }} 
        className="Story cursor-pointer relative w-32 h-52 shadow-md rounded-xl hover:scale-105  ">
            <Avatar src ={profilesrc} className=" m-3 border-6 border-blue-600 border-4  " />
            <h4 className="text-white left-5 bottom-5 absolute" >{text}</h4>
        </div>
    )
}

export default Story
