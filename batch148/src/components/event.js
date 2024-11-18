import React from "react";
import style from '../styles/event.module.css'

function Event() {
  function clicked(props) {
    alert(props);
  }

//   let style ={
//     color : "red",
//     backgroundColor : "blue",
//     padding : "20px"
//   }

  return (
    <div>
      <button className={style.btn} onClick={()=> clicked("New")}>Click Me</button>
    </div>
  );
}

export default Event;
