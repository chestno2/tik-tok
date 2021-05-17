import React, { useEffect, useState } from 'react'
import db from './fb'
import Post from './Post'
import Postbox from './Postbox'
import Storyreel from './Storyreel'

function Feed() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        )
    }, [])
    return (
        <div style={{flex:"0.33"}}>
            <Storyreel />

            {/* {Story} */}
            <Postbox />
            {/* {Post} */}
          {posts.map((post)=>(
           <Post 
           key={post.data.id}
           profile={post.data.profile}
           username={post.data.username}
           message={post.data.message}
           timestamp={post.data.timestamp}
           image={post.data.image}
           />
          ))}
        </div>
    )
}

export default Feed
