export class Cell {
  private _isAlive = false;

  get isAlive(): boolean {
    return this._isAlive;
  }

  constructor(isAlive: boolean) {
    this._isAlive = isAlive;
  }

  reset() {
    this._isAlive = false;
  }
}
