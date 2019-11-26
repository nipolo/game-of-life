import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AppState } from '@app/app.state';
import { Cell, selectCells, loadNextGenerationCells } from '../+state';
import { GameService } from '../services';

@Component({
  selector: 'play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
  private _subscriptions: Subscription[] = [];
  private _cells: Array<Array<Cell>>;

  get cells(): Array<Array<Cell>> {
    return this._cells;
  }

  cells$: Observable<Array<Array<Cell>>>;

  constructor(
    private gameService: GameService,
    private store: Store<AppState>
  ) {
    this._subscriptions.push(store.select(selectCells).subscribe(cells => this._cells = cells))
  }

  ngOnInit() {
  }

  loadNextGeneration() {
    const nextGenerationCells = this.gameService.getNextGeneration(this.cells);

    this.store.dispatch(loadNextGenerationCells({ cells: nextGenerationCells }))
  }
}
