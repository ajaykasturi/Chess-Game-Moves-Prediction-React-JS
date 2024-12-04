import React, { useEffect, useState } from "react";
import { FaChessKing as BlackKing } from "react-icons/fa6";
import { FaRegChessKing as WhiteKing } from "react-icons/fa6";
export default function Box({
  turn,
  bg = "",
  handleClick,
  highLightPositions,
  currPosition,
  whiteKingPosition,
  blackKingPosition,
  handleChangePosition,
}) {
  const result = highLightPositions.find(
    (item) => currPosition.x == item.x && currPosition.y == item.y
  );
  const Icon = (() => {
    if (
      whiteKingPosition.x == currPosition.x &&
      whiteKingPosition.y == currPosition.y
    ) {
      return BlackKing;
    } else if (
      blackKingPosition.x == currPosition.x &&
      blackKingPosition.y == currPosition.y
    ) {
      return WhiteKing;
    } else {
      return "";
    }
  })();
  const handleIconClicking = () => {
    if (
      currPosition.x == whiteKingPosition.x &&
      currPosition.y == whiteKingPosition.y &&
      turn == "white"
    ) {
      handleClick();
    } else if (
      currPosition.x == blackKingPosition.x &&
      currPosition.y == blackKingPosition.y &&
      turn == "black"
    ) {
      handleClick();
    } else if (result) {
      handleChangePosition({ x: result.x, y: result.y });
    }
  };
  return (
    <div
      onClick={handleIconClicking}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxSizing: "border-box",
        height: "80px",
        width: "80px",
        background: bg,
        ...result?.borderStyle,
      }}
    >
      {Icon && <Icon color="green" fontSize={50} />}
    </div>
  );
}
