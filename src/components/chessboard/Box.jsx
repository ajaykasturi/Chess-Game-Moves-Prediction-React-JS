import React, { useEffect, useState } from "react";

export default function Box({
  bg = "",
  handleClick,
  highLightPositions,
  currPosition,
}) {
  const [highLight, setHighLight] = useState("");
  useEffect(() => {
    if (highLightPositions.length) {
      const result = highLightPositions.some(
        (item) => currPosition.x == item.x && currPosition.y == item.y
      );
      console.log(result);
      if (result) {
        setHighLight("2px solid green");
      } else {
        setHighLight("");
      }
    }
  }, [highLightPositions]);
  return (
    <div
      onClick={handleClick}
      style={{
        boxSizing: "border-box",
        height: "50px",
        width: "50px",
        background: bg,
        border: highLight,
      }}
    ></div>
  );
}
