import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import { ExpandMore, HomeRounded } from '@material-ui/icons';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import { Avatar, IconButton } from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import { useStateValue } from './StateProvider';
function Header() {
    const[{user} ,dispatch ]  = useStateValue()
    return (
        <div className="header flex justify-between p-3  border-gray-100 border-b-8   shadow-xl z-40 sticky " >
            <div className="header_left flex  justify-evenly  " >
                <img className=" h-11 object-contain px-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
                 alt="logo" />
                 <div className="header_input  bg-gray-100 p-3 rounded-3xl">
                 <input className=" bg-gray-100 rounded-full outline-none" placeholder="Search Facebook" />
                     <SearchIcon />
                    
                 </div>
                </div>
              <div className="header_middle flex justify-center    ">
                 <div className="header_option px-3 ">
                     <IconButton>
                     <HomeRounded className="outline-none" />
                     </IconButton>
                 </div>
                 <div className="header_option  px-3">
                     <IconButton>
                     <FlagIcon className="mx-1"  />
                     </IconButton>
                 </div>
                 <div className="header_option  px-3">
                     <IconButton>
                     <SupervisedUserCircleRoundedIcon className="mx-1" />
                     </IconButton>
                 </div>
                 <div className=" px-3 header_option" >
                     <IconButton>
                     <StorefrontRoundedIcon />
                     </IconButton>
                 </div>
                </div>
                <div className="header_right flex justify-evenly   ">
                <div style={{alignItems:"center"}} className="header_info flex  pr-5 ml-5 " >
                <Avatar src={user.photoURL} />   
                <h4 className="pl-2" >{user.displayName}</h4>  
                </div> 
               <div className="" >
                <IconButton>
             <AddCircleRoundedIcon />
             </IconButton>
             <IconButton>
                 <ForumRoundedIcon />
                 </IconButton>
                 <IconButton>
                 <NotificationsActiveRoundedIcon />
                 </IconButton>
                 <IconButton>
                 <ExpandMore />
                 </IconButton>     
                 </div> 
            
                </div>
        </div>
       
    )
}

export default Header
