import { createAction, props } from '@ngrx/store';

import { registerType } from '@core/index';
import { Cell } from './cell.model';

export class GameOperationTypes {
  static readonly LOAD_GAME_DATA = registerType('[Game] GameDataLoaded');
  static readonly LOAD_NEXT_GENERATION_CELLS = registerType(
    '[Game] LoadNextGenerationCells'
  );
  static readonly RESET_GAME_DATA = registerType('[Game] ResetGameData');
}

export const loadGameData = createAction(
  GameOperationTypes.LOAD_GAME_DATA,
  props<{
    rows: number;
    columns: number;
    cells: Array<Array<Cell>>;
  }>()
);

export const loadNextGenerationCells = createAction(
  GameOperationTypes.LOAD_NEXT_GENERATION_CELLS,
  props<{ cells: Array<Array<Cell>> }>()
);

export const resetGameData = createAction(GameOperationTypes.RESET_GAME_DATA);
