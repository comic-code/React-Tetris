import { useState } from 'react';
import buildBoard from '../utils/Board';

export function useBoard({ rows, columns }) {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));
  return [board];
}