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
            <Post 
            profile ="https://cdn.forzaitalianfootball.com/wp-content/uploads/2020/11/Zlatan-Ibrahimovic-AC-Milan-1-800x0-c-default.webp"
            message="Wow this work"
            timestamp ="timestamp" 
            username="official_Zlatan"
            image="https://cdn.forzaitalianfootball.com/wp-content/uploads/2020/11/Zlatan-Ibrahimovic-AC-Milan-1-800x0-c-default.webp"/>
         <Post 
            profile ="https://cdn.forzaitalianfootball.com/wp-content/uploads/2020/11/Zlatan-Ibrahimovic-AC-Milan-1-800x0-c-default.webp"
            message="Wow this work"
            timestamp ="timestamp" 
            username="official_Zlatan"
            image="https://cdn.forzaitalianfootball.com/wp-content/uploads/2020/11/Zlatan-Ibrahimovic-AC-Milan-1-800x0-c-default.webp"/>

        </div>
    )
}

export default Feed
