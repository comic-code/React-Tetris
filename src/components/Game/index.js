import Menu from "../Menu";
import { GameWrapper } from "./styles";

import { useGameOver } from '../../hooks/useGameOver';
import Tetris from "../Tetris";

export default function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  function start() {
    resetGameOver();
  }

  return (
    <GameWrapper>
      {gameOver 
        ? <Menu start={start} />
        : <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      }
    </GameWrapper>
  )
}