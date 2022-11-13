import React from "react";
import { useState } from "react";

const App = () => {

// below code is for update time via button 
  var newtime = new Date().toLocaleTimeString();
  var [currtime, setCtime] = useState(newtime);

  const setTime = () => {
    newtime = new Date().toLocaleTimeString();
    setCtime(newtime);
  };

// above code is for update time via button 


//   below code is for update time automatically
  var ctime = new Date().toLocaleTimeString();
  var [cutime , stime] = useState(ctime);
  const updatethings = ()=>{
    var newtime= new Date().toLocaleTimeString();
    stime(newtime);
  }
  setInterval(updatethings,1000);

// above code is for update time automatically 


  return (
    <>
      <div className="make_Center">
        <h1> {currtime} </h1>
        <button onClick={setTime}> Get time </button>
      </div>
    
    <div> 
        <h2 className="make_Center"> {cutime}</h2>
    </div>
    </>
  );
};

export default App;
