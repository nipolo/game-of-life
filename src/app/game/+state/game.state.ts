import { Cell } from './cell.model';

export interface GameState {
  gameSettings: GameSettingsState;
  cells: Array<Array<Cell>>;
  gameIsReady: boolean;
}

interface GameSettingsState {
  rows: number;
  columns: number;
}
