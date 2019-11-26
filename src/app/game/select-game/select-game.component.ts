import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@app/app.state';
import { GameService } from '../services';
import { loadGameData } from '../+state';

@Component({
  selector: 'select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss']
})
export class SelectGameComponent implements OnInit {
  private _rowsControl: FormControl;
  private _columnsControl: FormControl;

  gameDataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private gameService: GameService,
    private router: Router
  ) {
    this.gameDataForm = fb.group({
      rows: (this._rowsControl = fb.control('', [Validators.min(5), Validators.max(50)])),
      columns: (this._columnsControl = fb.control('', [Validators.min(5), Validators.max(50)])),
    });
  }

  ngOnInit() {
  }

  loadGameData() {
    if (!this.gameDataForm.valid) {
      return;
    }

    const rows = Number(this._rowsControl.value);
    const columns = Number(this._columnsControl.value);
    const cells = this.gameService.generateRandomCells(rows, columns);

    this.store.dispatch(loadGameData({ rows, columns, cells }));

    this.router.navigate(['/play-game']);
  }
}
