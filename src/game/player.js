class Player{
  constructor(name){
    this.name = name;
    this.isAI = name.toLowerCase() === 'computer';
  }

  attack(enemyBoard,x,y){
    return enemyBoard.receiveAttack(x,y);
  }

  addPlayerShip(board,dir,x,y,length){
    return board.addShip(dir,{x,y},length);
  }

  randomAttack(enemyBoard) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    try {
      const result = enemyBoard.receiveAttack(x, y);
      return { result: result.result, message: result.message, x, y };
    } catch (error) {
      // If cell already hit, try again 
      return this.randomAttack(enemyBoard);
    }
  }
}

module.exports = {Player};