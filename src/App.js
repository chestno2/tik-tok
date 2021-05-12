import React from "react"
import './App.css';
import Feed from "./Feed";
import Header from "./Header";

import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  return (
   
  <div className="App" >
           
           <Header/>
          {/* {Header} */}
          {/* {App body} */}
          <div className="app_body flex">
          <Sidebar  />
          <Feed  />
          {/* {sidebar} */}
         <Widgets />
         {/* {Feed} */}
           {/* {Widgets} */}
    </div>
  </div>
  );
}

export default App;
