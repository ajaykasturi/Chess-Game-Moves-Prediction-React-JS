import React, { useState } from "react";
import "./styles.css";
import Box from "./Box";
export default function Board() {
  const [highLightPositions, setHighLightPositions] = useState([]);
  const [turn, setTurn] = useState("white");
  const [whiteKingPosition, setWhiteKingPosition] = useState({ x: 7, y: 3 });
  const [blackKingPosition, setBlackKingPosition] = useState({ x: 0, y: 3 });

  const handleClick = (pos) => {
    const styleValue = "3px solid blue";
    const borderLeftRight = {
      borderLeft: styleValue,
      borderRight: styleValue,
    };
    const borderTopBottom = {
      borderTop: styleValue,
      borderBottom: styleValue,
    };
    const borderAllSides = { border: styleValue };
    const positions = [
      pos,
      {
        x: pos.x,
        y: pos.y - 1,
        borderStyle: borderLeftRight,
      }, //left
      {
        x: pos.x,
        y: pos.y + 1,
        borderStyle: borderLeftRight,
      }, //right
      {
        x: pos.x - 1,
        y: pos.y,
        borderStyle: borderTopBottom,
      }, //top
      {
        x: pos.x + 1,
        y: pos.y,
        borderStyle: borderTopBottom,
      }, //bottom
      {
        x: pos.x - 1,
        y: pos.y - 1,
        borderStyle: borderAllSides,
      }, //left-top-diag
      {
        x: pos.x - 1,
        y: pos.y + 1,
        borderStyle: borderAllSides,
      }, //right-top-diag
      {
        x: pos.x + 1,
        y: pos.y - 1,
        borderStyle: borderAllSides,
      }, //left-bottom-diag
      {
        x: pos.x + 1,
        y: pos.y + 1,
        borderStyle: borderAllSides,
      }, //right-bottom-diag
    ];
    setHighLightPositions(positions);
  };
  const handleChangePosition = (shiftPos) => {
    if (turn == "white") {
      setTurn("black");
      setWhiteKingPosition(shiftPos);
    } else if (turn == "black") {
      setTurn("white");
      setBlackKingPosition(shiftPos);
    }
    setHighLightPositions([]);
  };
  return (
    <div className="container">
      <div className="board">
        {Array(8)
          .fill(0)
          .map((_, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex" }}>
              {Array.from({ length: 8 }).map((_, colIndex) => (
                <Box
                  handleChangePosition={handleChangePosition}
                  turn={turn}
                  whiteKingPosition={whiteKingPosition}
                  blackKingPosition={blackKingPosition}
                  key={colIndex + " " + rowIndex}
                  highLightPositions={highLightPositions}
                  currPosition={{ x: rowIndex, y: colIndex }}
                  handleClick={() => handleClick({ x: rowIndex, y: colIndex })}
                  bg={
                    rowIndex % 2 == 0
                      ? colIndex % 2 == 0
                        ? "white"
                        : "black"
                      : colIndex % 2 == 1
                      ? "white"
                      : "black"
                  }
                />
              ))}
            </div>
          ))}
      </div>
      <div className="next">Now {turn} king Turn</div>
    </div>
  );
}
