import { Avatar, colors } from '@material-ui/core'
import React from 'react'

function Sidebarrow({title,Icon,src}) {
    return (
       <div>
            <div className=" flex  p-3 hover:bg-gray-200 mt-3 rounded-3xl  " style={{alignItems:"center"}} >
                {src && <Avatar src={src} />}
                 { Icon &&  <Icon className="text-2xl "/> }
                <p className="ml-5 font-bold" >{title}</p>
            </div>
    </div>
    )
}

export default Sidebarrow
