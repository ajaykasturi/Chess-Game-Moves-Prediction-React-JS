import React, { useState } from "react";
import "./styles.css";
import Box from "./Box";
export default function Board() {
  const [highLightPositions, setHighLightPositions] = useState([]);
  const handleClick = (pos) => {
    const positions = [
      { x: pos.x, y: pos.y - 1 }, //left
      { x: pos.x, y: pos.y + 1 }, //right
      { x: pos.x - 1, y: pos.y }, //top
      { x: pos.x + 1, y: pos.y }, //bottom
      { x: pos.x - 1, y: pos.y - 1 }, //left-top-diag
      { x: pos.x - 1, y: pos.y + 1 }, //right-top-diag
      { x: pos.x + 1, y: pos.y - 1 }, //left-bottom-diag
      { x: pos.x + 1, y: pos.y + 1 }, //right-bottom-diag
    ];
    setHighLightPositions(positions);
  };
  return (
    <div className="board">
      {Array(8)
        .fill(0)
        .map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {Array.from({ length: 8 }).map((_, colIndex) => (
              <Box
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
  );
}
