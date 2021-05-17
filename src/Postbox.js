import { Avatar } from '@material-ui/core'
import React, { Profiler, useState } from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './fb';
import firebase from "firebase"

function Postbox() {

    const[{user} ,dispatch ]  = useStateValue()
    const [Text, setText] = useState("")
    const[Image,setImage] = useState("")
    const handleSubmit = (e) => {
          e.preventDefault();
          db.collection('posts').add({
              message:Text,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           profile:user.photoURL,
            username:user.displayName,
            image:Image
            }
            )
          setText(" ");
          setImage(" ");
    }
    return (
        <div className="shadow-2xl p-5  rounded-2xl mt-3  ">
            <div className="flex postbox_top   " style={{alignItems:"center"}} >
                <Avatar
                 src={user.photoURL}
                 />
                 <form className="  flex" >
                 <input onChange={(e)=> setText(e.target.value)} value={Text} placeholder={`What is in your mind ${user.displayName} ?`} className=" flex-1 bg-gray-200 p-3 px-5 rounded-3xl mx-4 outline-none "   />
                 <input onChange={(e)=>setImage(e.target.value)} value={Image} className="bg-gray-200 px-2 rounded-3xl  outline-none" placeholder="Enter Image URL" />
           
           <button onClick={handleSubmit} type="submit" className="hidden"  >
               Hidden Submit
           </button>
           </form>
            </div>
            <div className="postbox_bottom flex justify-evenly my-12" >
                   
                   <div className="flex cursor-pointer" style={{alignItems:"center"}} >
                       <VideoCallIcon className="text-red-600 " />
                       <p className="px-1" >Live Video</p>
                   </div>

                   <div className="flex cursor-pointer" style={{alignItems:"center"}}>
                      <PhotoLibraryIcon className="  text-green-600 " />
                       <p className="px-1">Take Photo</p>
                   </div>
                   <div className="flex cursor-pointer" style={{alignItems:"center"}}>
                       <InsertEmoticonIcon className="text-yellow-500" />
                      <p className="px-1" >Feeling/Activity</p>
                   </div>
                    
            </div>
        </div>
    )
}

export default Postbox
