import { Injectable } from '@angular/core';
import { Cell } from '../+state';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor() {

  }

  generateRandomCells(rowsCount = 5, columnsCount = 5, percentAlive: number = 0.2): Array<Array<Cell>> {
    if (percentAlive < 0 || 1 < percentAlive) {
      throw Error(`percentAlive must be a number between 0 and 1, inclusive. Value: ${percentAlive}`);
    }

    const cells: Array<Array<Cell>> = [];

    for (let row = 0; row < rowsCount; ++row) {
      cells.push(Array.from({ length: columnsCount }).map(() => new Cell(Math.random() < percentAlive)));
    }

    return cells;
  }

  getNextGeneration(cells: Array<Array<Cell>>) {
    const nextGenerationCells: Array<Array<Cell>> = [];

    let rowA = cells[0].map((_, index) => this.calculateNextGenerationCell(0, index, cells));
    let rowB = cells[1].map((_, index) => this.calculateNextGenerationCell(1, index, cells));

    for (let i = 2; i < cells.length; ++i) {
      nextGenerationCells[i - 2] = rowA;
      rowA = rowB;
      rowB = cells[i].map((_, index) => this.calculateNextGenerationCell(i, index, cells));
    }
    nextGenerationCells[cells.length - 2] = rowA;
    nextGenerationCells[cells.length - 1] = rowB;

    return nextGenerationCells;
  }

  private calculateNextGenerationCell(row: number, column: number, cells: Array<Array<Cell>>): Cell {
    const maxRowNumber = cells[0].length - 1;
    const maxColumnNumber = cells.length - 1;
    const alive = cells[row][column].isAlive;

    const liveNeighborCount = this.getNeighborsOfCell(row, column, maxRowNumber, maxColumnNumber, cells)
      .filter(c => c.isAlive)
      .length;

    if (alive && liveNeighborCount >= 2 && liveNeighborCount <= 3) {
      return new Cell(true);
    }
    if (!alive && liveNeighborCount == 3) {
      return new Cell(true);
    }

    return new Cell(false);
  }

  private getNeighborsOfCell(row, column, maxRow, maxColumn, cells: Array<Array<Cell>>): Cell[] {
    if (this.isOutOfBounds(row, column, maxRow, maxColumn)) {
      throw Error('Cell coordinates are out of bounds.');
    }

    const possibleNeighborCoords = [
      { row: row - 1, column: column },
      { row: row - 1, column: column + 1 },
      { row: row, column: column + 1 },
      { row: row + 1, column: column + 1 },
      { row: row + 1, column: column },
      { row: row + 1, column: column - 1 },
      { row: row, column: column - 1 },
      { row: row - 1, column: column - 1 }
    ].filter(offset => !this.isOutOfBounds(offset.row, offset.column, maxRow, maxColumn));

    return possibleNeighborCoords.map(coords => cells[coords.row][coords.column]);
  }

  private isOutOfBounds(row, column, maxRow, maxColumn): boolean {
    return row < 0 || maxRow < row || column < 0 || maxColumn < column;
  }
}
