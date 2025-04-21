function Player(name){
    const isAI = name.toLowerCase() === 'computer';
  
    const attack = (enemyBoard,x,y) => {
      enemyBoard.receiveAttack(x,y);
    }
  
    const addPlayerShip = (board,dir,x,y,length) =>{
      board.addShip(dir,{x,y},length)
    }
  
    const randomAttack = (enemyBoard) => {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
  
      return enemyBoard.receiveAttack(x,y);
    }
  
    return{
      name,
      isAI,
      attack,
      randomAttack
    }
  }