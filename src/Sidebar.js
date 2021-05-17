import { ChatSharp, EmojiFlagsSharp, ExpandMore, PeopleOutline, StoreSharp, VideoLibrarySharp } from '@material-ui/icons'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Sidebarrow from './Sidebarrow'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const[{user} ,dispatch ]  = useStateValue()
    return (
        <div style={{flex:"0.33"}} >
        <Sidebarrow 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsHxzphI1wcK4ic90u91I8jOfN_ObMaHaoCpu0gWPubTpKwYMvzWfhy5nkWj73lkt4Js&usqp=CAU"  
        title={user.displayName} />
            <Sidebarrow Icon={EmojiFlagsSharp} title="pages" />
            <Sidebarrow Icon={PeopleOutline} title="Friends" />
            <Sidebarrow Icon={ChatSharp} title="Messenger" />
            <Sidebarrow Icon={StoreSharp} title="MarketPlace" />
            <Sidebarrow Icon={VideoLibrarySharp} title="Videos" />
            <Sidebarrow Icon={ExpandMore} title="Show More" />
        </div>
    )
}

export default Sidebar
