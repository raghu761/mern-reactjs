// var React = require('react')
// var ReactDOM = require('react-dom')

// ReactDOM.render(<h1>hello world</h1> , document.getElementById("root"))

import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
// <div>
// <h1>hello world</h1> 
// <h1>this is multiple ofjsx renders </h1>
// </div> , document.getElementById("root"))


// var ele = document.createElement("h1");
// ele.innerHTML =" raghunath's inner html"
// document.getElementById("root").appendChild(ele);


// ReactDOM.render(
//   <React.Fragment>
//     <h1>hello world</h1> 
// <h1>this is multiple ofjsx renders </h1>
// <h1>
//   using react Fragment
// </h1>
//   </React.Fragment>,
//   document.getElementById("root")
// )

// task one 


// ReactDOM.render(
//    <> 
//     <h1>Raghuath Deshpande netflix picks </h1>
//     <h1>
//     <ol>
//       <li> series 1 </li>
//       <li> series 2 </li>      
//       <li> series 3 </li>
//       <li> series 4 </li>
//       <li> series 5 </li>
//     </ol>
//     </h1>
// </> , document.getElementById("root"))

// const name = "raghunath deshpande ";

// ReactDOM.render( <>
//  <h1>
//  my name is {name} ,
//   lucky number is { Math.random()}
//  </h1> 
// </> , document.getElementById("root"))


// display current date and time right now 

// var currDate = new Date();
// ReactDOM.render(<> 
//   <h1> my name is raghunath </h1>
//   <p>
//     Current date is = {currDate.getDate() + " " + currDate.getMonth()  +" " + currDate.getFullYear()}
//   </p>
//   <p>
//     current time is = {currDate.getHours() + " "  + currDate.getMinutes() + " "  + currDate.getSeconds()}
//   </p>
// </>  , document.getElementById("root"))

// jsx attributes 
import "./index.css";
var name = "raghunath"
var img1 = "https://picsum.photos/200/300"
var img2 = "https://picsum.photos/250/300"
var img3 = "https://picsum.photos/300/300"
var link1 = "https://www.google.com"
ReactDOM.render( <>
<h1 className="heading">
  my name is {name}
</h1>
<img alt ="testingimage" src={img1} /> 
<img alt ="testingimage" src={img2} /> 
<a href={link1} target="_blanks" ><img alt ="testingimage" src={img3} /> </a>


</> , document.getElementById("root"))


