import { Injectable, ErrorHandler } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from '../notifications/notification.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    this.notificationsService.error(displayMessage);

    super.handleError(error);

    throw error;
  }
}
