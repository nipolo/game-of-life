import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectGameComponent, PlayGameComponent, PlayGameGuard } from './game';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-game',
    pathMatch: 'full'
  },
  {
    path: 'select-game',
    component: SelectGameComponent
  },
  {
    path: 'play-game',
    component: PlayGameComponent,
    canActivate: [PlayGameGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
