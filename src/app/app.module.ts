import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';
import { SelectGameComponent, PlayGameComponent, PlayGameGuard } from './game';

import { reducers } from './app.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const APP_REDUCER = new InjectionToken<any>('App Reducer', {
  factory: () => reducers
});

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(APP_REDUCER, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  declarations: [
    AppComponent,
    SelectGameComponent,
    PlayGameComponent
  ],
  providers: [
    PlayGameGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
