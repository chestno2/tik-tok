import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';

function Post({profile , image ,username,timestamp,message}) {
    return (
        <div className="shadow-xl rounded-2xl my-7 " >
            <div className="my-4 flex w-full  "style={{alignItems:"center"}} >
                <Avatar className="w-full" src={profile} />
                <div className="ml-3" >
                    <h3>{username}</h3>
                    <p>{timestamp}
                    </p>
                </div>
            </div>
            <div className="Post_bottom my-5 ">
                <p>{message}</p>
            </div>
            <div className="Post_Img mt-3" >
                  <img src={image}  />     
            </div>

            <div className="post_options flex justify-evenly p-3 text-gray-300 " >
                   
                   <div className="flex text-gray-300 cursor-pointer   " style={{alignItems:"center"}} >
                      
                       <ThumbUpAltIcon className="outline-none  "  />
                       <p>Like</p>
                     
                   </div>
                   <div className="flex text-gray-300 cursor-pointer " style={{alignItems:"center"}} >
                       <ChatBubbleIcon />
                       <p>Comment</p>
                   </div>
                   <div className="flex text-gray-300  cursor-pointer" style={{alignItems:"center"}}>
                       <ShareIcon />
                       <p>Share</p>
                   </div>
            </div>
        </div> 
    )
}

export default Post
