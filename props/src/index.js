import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from './Cards';
import Sdata from './Sdata';
// console.log("testing ...")

// const oldarr = ['raghunath' , 'vijeth' , 'zeeshan']

// const newarr = oldarr.map((value , index, oldarr)=>{
//   return value;
// })
// console.log(typeof(newarr));

ReactDOM.render(
  <>
  <h1 className="heading_style"> List of top 5 netflix series in 2022 </h1>
  {Sdata.map((val)=>(
    <Card 
          imgsrc = {val.imgsrc}
          title = {val.title}
          sname ={ val.sname}
          button= {val.button}
    />
  ))}
  </>,
  document.getElementById("root")
);