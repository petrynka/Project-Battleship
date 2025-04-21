function GameBoard(){
    const boardSize = 10;
    const board = [];
    const ships = [];
  
    for(let i = 0; i < boardSize; i++){
      board[i] = [];
      for(let j = 0; j < boardSize; j++){
        board[i][j] = null;
      }
    }
  
    const addShip = (direction,start,length) => {
      const newShip = Ship(length);
  
      if(direction === 'horizontal'){
        if(!(start.y + length <= boardSize)){
          throw new Error('Ship out gameBoard');
        }
      }else{
        if(!(start.x + length <= boardSize)){
          throw new Error('Ship out gameBoard');
        }
      }
  
      for(let i = 0; i < length; i++){
        const x = direction === 'horizontal' ? start.x : start.x+i;
        const y = direction === 'horizontal' ? start.y+i : start.y;
        if(board[x][y] !== null) throw new Error('Ships collision');
      }
  
      for(let i = 0; i < length; i++){
        const x = direction === 'horizontal' ? start.x : start.x+i;
        const y = direction === 'horizontal' ? start.y+i : start.y;
        board[x][y] = newShip;
      }
  
      ships.push(newShip);
    }
  
    const receiveAttack = (x,y) =>{
      const target = board[x][y];
  
      if(target === 0 || target === 'hit'){
        throw new Error('Oops you already shout in this cell');
      }
  
      if(target === null){
        board[x][y] = 0;
        console.log('Oops! You missed.');
      }else{
        target.addHit();
        board[x][y] = 'hit';
        console.log('hit');
      }
    }
  
    const isGameOver = () => ships.every(ship => ship.isShipSunk());
  
    const getBoardState = () => {
      return board.map(raw =>{
        raw.map(cell =>{
          if(cell === null) return '~';
          if (cell === 0) return 'O';
          if (cell === 'hit') return 'X';
          return 'S';
        });
      });
    }
  
    return{
      addShip,
      receiveAttack,
      isGameOver,
      getBoardState
    }
  }