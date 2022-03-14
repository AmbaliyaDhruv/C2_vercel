import "./App.css";

import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const[show,setShow]=useState(false)
  return (
    <div className="App">
    
      <button className="toggleForm" onClick={()=>{
        setShow(!show)
      
      }}>
        {show?"Show component based on state":"Show text Add House or Show Rentals based on state"}
        
      </button>
    <br />
    {!show ?<Rentals/>:<AddHouse/> } 
    </div>
  );
}

export default App;
