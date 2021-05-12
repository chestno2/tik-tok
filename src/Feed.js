import React from 'react'
import Post from './Post'
import Postbox from './Postbox'
import Storyreel from './Storyreel'

function Feed() {
    return (
        <div style={{flex:"0.33"}}>
            <Storyreel />

            {/* {Story} */}
            <Postbox />
            {/* {Post} */}
            <Post />
        </div>
    )
}

export default Feed
