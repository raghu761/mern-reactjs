import React  from "react";

const fontstyle= {
  color: "red"
}

const SlotM = ( props)=>{
var {x, y,z} = props;

  if( x === y && y === z){

    return (
      <>
        <div className="slot_inner">
          <h1> {x} {y} {z} </h1>
          <h1> This is Maching .</h1>
          <hr/>
        </div>
      </>
    )
  }
  else{

    return (
      <>
        <div className="slot_inner">
          <h1> {x} {y} {z} </h1>
          <h1> This is not Maching .</h1>
          <hr/>
        </div>
      </>
    )
  }
}

const App =()=>{
  return (
    <>
    
      <div>
      
      <h1 className="heading_style"> slot Welcome to <span style={ fontstyle}> Slot Machine Game </span> :slot  </h1>
      <div className="slot_machine"> 
      <SlotM x="😊" y="😊" z="😊"/>
      <SlotM />
      <SlotM />
      </div>
     
      </div>
    
    </>
  )
}

export default App;