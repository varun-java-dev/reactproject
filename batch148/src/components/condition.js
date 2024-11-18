import React from "react";

function Missed() {
  return <h1>Missed the Goal</h1>;
}

function Correct() {
  return (
    <div>

        <button>click here to make goal</button>
        <h1>"Goalllll"</h1>
    </div>
  )
}
function Condition(props) {
  let flag = props.goal;
  if (flag) {
    return <Correct />;
  }

  return <Missed />;
}

export default Condition;
