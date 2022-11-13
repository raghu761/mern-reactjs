import React, { useState } from "react";

const App =()=>{
    let currcolor = "green";
    let text = "Click me"
    const [btext , setNewText] = useState(text);
    const [ccolor , setnewBG] =  useState(currcolor);
    
    const changeBG= ()=>{
        const newbg = "yellow";
        setnewBG(newbg)
        setNewText("y you clicked me")
    }
    const changeDoubleClick =()=>{
        setNewText(text)
    }

    return (<>

        <div className="make_center" style={{ backgroundColor : ccolor }}>
            <button onClick={changeBG} onDoubleClick={changeDoubleClick}> {btext} </button>
        </div> 
    </>)
};

export default App;