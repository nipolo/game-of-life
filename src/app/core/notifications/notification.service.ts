import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  constructor() {}

  error(message: string) {
    console.log(message);
  }
}
