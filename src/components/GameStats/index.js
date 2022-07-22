import React from "react";
import { GameStatsWrapper } from "./styles";

function GameStats({ gameStats }) {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <GameStatsWrapper>
      <li>Nível</li>
      <li className="value">{level}</li>
      <li>Linhas por nível</li>
      <li className="value">{linesToLevel}</li>
      <li>Pontos</li>
      <li className="value">{points}</li>
    </GameStatsWrapper>
  )
}

export default React.memo(GameStats);