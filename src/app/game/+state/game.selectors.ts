import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.state';

const selectFeature = (state: AppState) => state;

export const selectCells = createSelector(
  selectFeature,
  (state: AppState) => state.game.cells
);

export const selectGameIsReady = createSelector(
  selectFeature,
  (state: AppState) => state.game.gameIsReady
)
