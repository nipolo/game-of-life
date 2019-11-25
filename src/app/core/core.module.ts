import {
  NgModule,
  Optional,
  SkipSelf,
  ErrorHandler
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationService } from './notifications/notification.service';
import { AppErrorHandler } from './error-handler/app-error-handler.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NotificationService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
