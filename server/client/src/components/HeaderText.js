import React from "react";
function HeaderText(props) {
  // this header get one prop: text.
  // ude it to get same header style.
  return (
    <h1 style={{ fontWeight: 100, color: "rgb(156, 156, 156)" }}>
      {props.text}
    </h1>
  );
}

export default HeaderText;
