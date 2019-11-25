import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../../app.state';
import { selectGameIsReady } from '../+state';

@Injectable()
export class PlayGameGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(state => selectGameIsReady(state)),
      map((gameIsReady: boolean) => {
        if (!gameIsReady) {
          this.router.navigate(['/select-game']);
        }
        return gameIsReady;
      })
    );
  }
}
