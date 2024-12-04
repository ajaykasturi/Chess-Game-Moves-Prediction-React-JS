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
  const highlight = highLightPositions.find(
    (item) => currPosition.x == item.x && currPosition.y == item.y
  );
  const getIcon = () => {
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
      return null;
    }
  };
  const Icon = getIcon();
  const handleIconClicking = () => {
    const isWhiteTurn =
      currPosition.x === whiteKingPosition.x &&
      currPosition.y === whiteKingPosition.y &&
      turn === "white";
    const isBlackTurn =
      currPosition.x === blackKingPosition.x &&
      currPosition.y === blackKingPosition.y &&
      turn === "black";
    if (isWhiteTurn || isBlackTurn) {
      handleClick();
    } else if (highlight) {
      handleChangePosition({ x: highlight.x, y: highlight.y });
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
        ...highlight?.borderStyle,
      }}
    >
      {Icon && <Icon color="green" fontSize={50} />}
    </div>
  );
}
