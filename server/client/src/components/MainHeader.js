import React from "react";
function MainHeader(props) {
    // this header get one prop: text.
    // ude it to get same header style.
  return (
      <h1>{props.text}</h1>
  );
}

export default MainHeader;