import { Avatar} from '@material-ui/core'
import React from 'react'
import { useStateValue } from './StateProvider'

function Sidebarrow({title,Icon,src}) {
    
    const[{user} ,dispatch ]  = useStateValue()
    return (
       <div>
            <div className=" flex  p-3 hover:bg-gray-200 mt-3 rounded-3xl  " style={{alignItems:"center"}} >
                {src && <Avatar src={user.photoURL} />}
                 { Icon &&  <Icon className="text-2xl "/> }
                <p className="ml-5 font-bold" >{title}</p>
            </div>
    </div>
    )
}

export default Sidebarrow
