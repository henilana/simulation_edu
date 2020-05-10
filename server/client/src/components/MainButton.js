import React from "react";
function MainButton(props) {
  let btnStyle = {
    width: "22vw",
    height: "7vw",
    fontSize: "2.5vw",
    color: "white",
    backgroundColor: "rgb(107, 107, 107)",
    border: "none",
  };
  // this button get two params: funcion , text.
  // call this button everywhere..
  return (
    <button
      className="btn-style"
      style={btnStyle}
      onClick={props.fun}
      className="btn-style"
    >
      {props.text}{" "}
    </button>
  );
}

export default MainButton;
