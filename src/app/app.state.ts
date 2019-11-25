import { ActionReducerMap } from '@ngrx/store';

import { GameState, gameReducer } from './game';

export const reducers: ActionReducerMap<AppState> = {
  game: gameReducer
};

export interface AppState {
  game: GameState;
}
