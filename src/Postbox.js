import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Postbox() {

    const [Text, setText] = useState("")
    const[Image,setImage] = useState("")
    const handleSubmit = (e) => {
          e.preventDefault();
          setText(" ");
          setImage(" ");
    }
    return (
        <div className="shadow-2xl p-5  rounded-2xl mt-3  ">
            <div className="flex postbox_top   " style={{alignItems:"center"}} >
                <Avatar
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsHxzphI1wcK4ic90u91I8jOfN_ObMaHaoCpu0gWPubTpKwYMvzWfhy5nkWj73lkt4Js&usqp=CAU"
                 />
                 <form className="  flex" >
                 <input onChange={(e)=> setText(e.target.value)} value={Text} placeholder="Enter Text" className=" flex-1 bg-gray-200 p-3 px-5 rounded-3xl mx-4 outline-none "   />
                 <input onChange={(e)=>setImage(e.target.value)} value={Image} className="bg-gray-200 px-2 rounded-3xl  outline-none" placeholder="Enter Image URL" />
           
           <button onClick={handleSubmit} type="submit" className="hidden"  >
               Hidden Submit
           </button>
           </form>
            </div>
            <div className="postbox_bottom flex justify-evenly my-12" >
                   
                   <div className="flex" style={{alignItems:"center"}} >
                       <VideoCallIcon className="text-red-600 " />
                       <p className="px-1" >Live Video</p>
                   </div>

                   <div className="flex" style={{alignItems:"center"}}>
                      <PhotoLibraryIcon className="  text-green-600 " />
                       <p className="px-1">Take Photo</p>
                   </div>
                   <div className="flex" style={{alignItems:"center"}}>
                       <InsertEmoticonIcon className="text-yellow-500" />
                      <p className="px-1" >Feeling/Activity</p>
                   </div>
                    
            </div>
        </div>
    )
}

export default Postbox
