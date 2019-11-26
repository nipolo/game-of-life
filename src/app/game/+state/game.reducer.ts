import { createReducer, on } from '@ngrx/store';

import { GameState } from './game.state';
import {
  loadGameData,
  resetGameData,
  loadNextGenerationCells
} from './games.actions';

export const initialState: GameState = <GameState>{
  gameSettings: {
    columns: undefined,
    rows: undefined
  },
  cells: undefined,
  gameIsReady: false
};

export const gameReducer = createReducer(
  initialState,
  on(loadGameData, (state, action) => ({
    gameSettings: { rows: action.rows, columns: action.columns },
    cells: action.cells,
    gameIsReady: true
  })),
  on(loadNextGenerationCells, (state, action) => ({
    ...state,
    cells: action.cells
  })),
  on(resetGameData, (state, action) => ({
    ...state,
    gameIsReady: false
  }))
);
