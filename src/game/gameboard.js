const {Ship} = require('./ship');

class GameBoard{
  constructor(){
    this.boardSize = 10;
    this.board = [];
    this.ships = [];

    for(let i = 0;i < this.boardSize; i++){
      this.board[i] = [];
      for(let j = 0;j < this.boardSize; j++){
        this.board[i][j] = null;
      }
    }
  }

  addShip(direction,start,length){
    const newShip = new Ship(length);

    if (direction === 'horizontal') {
      if (!(start.y + length <= this.boardSize)) {
        throw new Error('Ship out gameBoard');
      }
    } else {
      if (!(start.x + length <= this.boardSize)) {
        throw new Error('Ship out gameBoard');
      }
    }

    for (let i = 0; i < length; i++) {
      const x = direction === 'horizontal' ? start.x : start.x + i;
      const y = direction === 'horizontal' ? start.y + i : start.y;
      if (this.board[x][y] !== null) throw new Error('Ships collision');
    }

    for (let i = 0; i < length; i++) {
      const x = direction === 'horizontal' ? start.x : start.x + i;
      const y = direction === 'horizontal' ? start.y + i : start.y;
      this.board[x][y] = newShip;
    }

    this.ships.push(newShip);
    return newShip;
  }

  receiveAttack(x,y){
    const target = this.board[x][y];

    if (target === 0 || target === 'hit') {
      throw new Error('Oops you already shot in this cell');
    }

    if (target === null) {
      this.board[x][y] = 0;
      return { result: 'miss', message: 'Oops! You missed.' };
    } else {
      target.addHit();
      this.board[x][y] = 'hit';
      return { result: 'hit', message: 'Hit!' };
    }
  }

  isGameOver() {
    return this.ships.every(ship => ship.isShipSunk());
  }

  getBoardState() {
    return this.board.map(row => {
      return row.map(cell => {
        if (cell === null) return '~';
        if (cell === 0) return 'O';
        if (cell === 'hit') return 'X';
        return 'S';
      });
    });
  }
}

module.exports = {GameBoard};