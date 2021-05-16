import React from "react"
import './App.css';
import Feed from "./Feed";
import Header from "./Header";
import LoginScreen from "./LoginScreen";

import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

function App() {
   
  const[{user} ,dispatch ]  = useStateValue()
  return (
   
  <div className="App" >
         {!user ?  (<LoginScreen /> ): (
       <>
       <Header/>
    {/* {Header} */}
    {/* {App body} */}
    <div className="app_body flex">
    <Sidebar  />
    <Feed  />
    {/* {sidebar} */}
      <Widgets />
    </div>
    </>
         )}

       
         {/* {Feed} */}
           {/* {Widgets} */}
  
  </div>
  );
}

export default App;
