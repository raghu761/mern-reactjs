import React from 'react'
import ReactDOM   from 'react-dom'
import Heading  from "./Heading";
import Para from './Para';
import youtuber , {subscribe} from './App-1';

ReactDOM.render( <>  <Heading />  <Para/> {youtuber}  {subscribe}</> , document.getElementById("root"))