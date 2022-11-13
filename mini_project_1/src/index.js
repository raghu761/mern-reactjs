
import "./index.css";
var React = require("react");
var ReactDOM = require("react-dom");

let currDate = new Date();
var currTime = currDate.getHours();
var greeting = "";

var cssStyle = {
  color: "green",
};

if (currTime > 1 && currTime < 12) {
  greeting = "Good morning ";
  cssStyle.color = "green";
} else if (currTime >= 12 && currTime <= 19) {
  greeting = "Good Evening";
  cssStyle.color = "orange";
} else {
  greeting = "Good night";
  cssStyle.color = "black";
}
ReactDOM.render(
  <>
    <div className="greet">
      <h1>
        Hello sir , <span style={cssStyle}> {greeting} </span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
