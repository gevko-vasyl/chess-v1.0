import { Cell } from './Cell';
import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { Figure } from './figures/Figure';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';

export class Board {
  cells: Cell[][] = [];

  lostBlackFigures: Figure[] = [];

  lostWhiteFigures: Figure[] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostWhiteFigures = this.lostWhiteFigures;
    newBoard.lostBlackFigures = this.lostBlackFigures;
    return newBoard;
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  // TODO remove eslint-disable-next-line no-new error
  private addKings() {
    // eslint-disable-next-line no-new
    new King(Colors.BLACK, this.getCell(4, 0));
    // eslint-disable-next-line no-new
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  private addKnights() {
    // eslint-disable-next-line no-new
    new Knight(Colors.WHITE, this.getCell(1, 7));
    // eslint-disable-next-line no-new
    new Knight(Colors.WHITE, this.getCell(6, 7));
    // eslint-disable-next-line no-new
    new Knight(Colors.BLACK, this.getCell(1, 0));
    // eslint-disable-next-line no-new
    new Knight(Colors.BLACK, this.getCell(6, 0));
  }

  private addBishops() {
    // eslint-disable-next-line no-new
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    // eslint-disable-next-line no-new
    new Bishop(Colors.WHITE, this.getCell(5, 7));
    // eslint-disable-next-line no-new
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    // eslint-disable-next-line no-new
    new Bishop(Colors.BLACK, this.getCell(5, 0));
  }

  private addQueens() {
    // eslint-disable-next-line no-new
    new Queen(Colors.BLACK, this.getCell(3, 0));
    // eslint-disable-next-line no-new
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  private addRooks() {
    // eslint-disable-next-line no-new
    new Rook(Colors.WHITE, this.getCell(0, 7));
    // eslint-disable-next-line no-new
    new Rook(Colors.WHITE, this.getCell(7, 7));
    // eslint-disable-next-line no-new
    new Rook(Colors.BLACK, this.getCell(0, 0));
    // eslint-disable-next-line no-new
    new Rook(Colors.BLACK, this.getCell(7, 0));
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      // eslint-disable-next-line no-new
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      // eslint-disable-next-line no-new
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  public addFigures() {
    this.addKings();
    this.addBishops();
    this.addKnights();
    this.addPawns();
    this.addQueens();
    this.addRooks();
  }
}
