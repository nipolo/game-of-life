export class Cell {
  private _isActive = false;

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  reset() {
    this._isActive = false;
  }
}
