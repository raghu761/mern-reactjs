import React from "react";
import { useState } from "react";



const App=() => {

    // const state = useState();
    const [count,setCount] = useState(0); 

    const IncNum=()=>{
        setCount(count+1);
    }


return(<>
    <div className="make_Center"> 
        <h1> {count}</h1>
        <button onClick={IncNum}> click me</button>
    </div>
   
</>)
}

export default App;