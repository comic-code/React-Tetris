import Board from "../Board";
import { TetrisWrapper } from "./styles";

import { useBoard } from '../../hooks/useBoard';
import { useGameStats } from '../../hooks/useGameStats';
import { usePlayer } from '../../hooks/usePlayer';
import GameStats from "../GameStats";
import Previews from "../Previews";

export default function Tetris({ rows, columns, setGameOver }) {
  const [board, setBoard] = useBoard({ rows, columns }); 
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();

  return (
    <TetrisWrapper>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </TetrisWrapper>
  )
}