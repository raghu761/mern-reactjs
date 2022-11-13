import React from "react";
function Card(props){
    return (
      <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="altImage" className="card__img" />
        <div className="card__info">
          <span className="card__catergory">{props.title} </span>
          <h3 className="card__title"> {props.sname} </h3>
          <a href="https://www.netflix.com/in/title/80057281" target="_blank">
            <button> {props.button} </button>
          </a>
        </div>
      </div>
    </div>
    )
  }

  export default Card;