import React from "react";
function MainHeader(props) {
  // this header get one prop: text.
  // ude it to get same header style.
  return (
    <h1 style={{ fontWeight: 100, color: "rgb(156, 156, 156)" }}>
      {props.headertext}
    </h1>
  );
}

export default MainHeader;
