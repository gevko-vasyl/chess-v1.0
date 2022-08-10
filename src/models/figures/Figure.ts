import logo from '../../assets/black-bishop.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames {
  FIGURE = '',
  KING = 'king',
  KNIGHT = 'knight',
  PAWN = 'pawn',
  QUEEN = 'queen',
  ROOK = 'rook',
  BISHOP = 'bishop',
}

export class Figure {
  color: Colors;

  logo: typeof logo | null;

  cell: Cell;

  name: FigureNames;

  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.id = Math.random();
    this.name = FigureNames.FIGURE;
    this.logo = null;
  }

  canMove(target: Cell): boolean {
    console.log('canMove in figure');
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;

    return true;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  moveFigure(target: Cell) {}
}
