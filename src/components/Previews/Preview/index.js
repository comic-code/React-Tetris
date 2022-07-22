import React from "react"
import { transferToBoard } from "../../../utils/Tetrominoes";
import buildBoard from "../../../utils/Board";
import BoardCell from "../../BoardCell";
import { PreviewWrapper } from "./styles";

function Preview({ tetromino, index }) {
  const { shape, className } = tetromino;
  const board = buildBoard({ rows: 4, columns: 4 });
  const style = {top: `${index * 6}rem`};

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape
  });


  return (
    <PreviewWrapper style={style}>
      <div className="previewBoard">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </PreviewWrapper>
  )
}

export default React.memo(Preview);