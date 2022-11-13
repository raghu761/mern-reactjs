import { add ,sub, div, mul } from "./Calc";
import React from "react";


var a=15;
var b= 30;
function App() {
     return (
      <>
        <h1> numbers are {a} and {b}</h1>
        <h1>sum of two numbers {add(a,b)}</h1> 
        <h1>product of two numbers {mul(a,b)}</h1> 
        <h1>division  of two numbers {div(a,b)}</h1> 
        <h1>sub of two numbers {sub(a,b)}</h1> 
      </>
     )
}

export default App;
