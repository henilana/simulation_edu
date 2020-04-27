import React from "react";
function MainButton(props) {
    // this button get two params: funcion , text.
    // call this button everywhere..
  return (
    <button className="btn-style"
    onClick={props.fun}
    className="btn-style">
{props.text}    </button>
  );
}

export default MainButton;