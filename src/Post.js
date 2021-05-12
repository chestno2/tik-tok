import { Avatar } from '@material-ui/core'
import React from 'react'

function Post({profile , image ,username,timestamp,message}) {
    return (
        <div>
            <div>
                <Avatar src={profile} />
                <div>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
        </div> 
    )
}

export default Post
