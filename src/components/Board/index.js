import BoardCell from "../BoardCell";
import { BoardWrapper } from "./styles";

export default function Board({ board }) {
  return (
    <BoardWrapper rows={board.size.rows} columns={board.size.columns}>
      {board.rows.map((row, y) => 
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </BoardWrapper>
  )
} 