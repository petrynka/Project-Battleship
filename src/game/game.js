const {Ship} = require('../game/ship');
const {Player} = require('../game/player');
const {GameBoard} = require('../game/gameboard');
const {ComputerPlayer} = require('../game/computerPlayer');

class Battleship{
    constructor(){
        this.playerBoard = new GameBoard();
        this.player = new Player('Human');
        this.computer = new ComputerPlayer();
        this.currentTurn = 'player';
    }

    setup(){
        console.log('Preparing for the game');

        this.computer.placeShipRandomly();
        console.log('Computer placed his ships');

        this.playerBoard.addShip('horizontal', { x: 0, y: 0 }, 4);
        this.playerBoard.addShip('vertical', { x: 2, y: 2 }, 3);   
        this.playerBoard.addShip('horizontal', { x: 5, y: 5 }, 3);
        this.playerBoard.addShip('horizontal', { x: 9, y: 0 }, 2);   
        this.playerBoard.addShip('horizontal', { x: 7, y: 7 }, 2);
        this.playerBoard.addShip('vertical', { x: 0, y: 5 }, 2);  
        this.playerBoard.addShip('horizontal', { x: 3, y: 9 }, 1);
        this.playerBoard.addShip('vertical', { x: 5, y: 0 }, 1);   
        this.playerBoard.addShip('horizontal', { x: 9, y: 5 }, 1); 
        this.playerBoard.addShip('vertical', { x: 7, y: 3 }, 1); 

        console.log('Player placed his ships');
        console.log('Game is ready');
    }

    displayBoards() {
        console.log('\nPlayer Board');
        this.displayBoard(this.playerBoard.getBoardState());
        
        console.log('\nComputer Board');
        const computerBoardView = this.computer.gameBoard.getBoardState().map(row => {
          return row.map(cell => {
            if (cell === 'S') return '~'; 
            return cell;
          });
        });
        this.displayBoard(computerBoardView);
    }
    
    displayBoard(board) {
        console.log('   0 1 2 3 4 5 6 7 8 9');
        console.log('  ---------------------');
        for (let i = 0; i < 10; i++) {
          let row = i + ' |';
          for (let j = 0; j < 10; j++) {
            row += ' ' + board[i][j];
          }
          console.log(row);
        }
    }

    playerTurn(x,y){
        if(this.currentTurn !== 'player'){
            console.log('Its not your move');
            return
        }

        try {
            const result = this.player.attack(this.computer.gameBoard, x, y);
            console.log(`You Shoot in ${x},${y} and ${result.message}`);

            if(this.computer.gameBoard.isGameOver()){
                console.log('Congratulation you Win');
                return { gameOver: true, winner: 'player' }
            }

            // Only switch turns if it's a miss
            if(result.result === 'miss') {
                this.currentTurn = 'computer';
            }

            return { result: result.result };
        } catch (error) {
            console.log(`Error ${error.message}`);
            return { error: error.message }
        }
    }

    computerTurn(){
        if(this.currentTurn !== 'computer'){
            console.log('Its not computer move time');
            return
        }

        const result = this.computer.makeSmartMove(this.playerBoard);
        console.log(`Computer make shot: ${result.message}`);
    
        if (this.playerBoard.isGameOver()) {
            console.log('Unfortunately computer wins');
            return { gameOver: true, winner: 'computer' };
        }
    
        // Only switch turns if it's a miss
        if(result.result === 'miss') {
            this.currentTurn = 'player';
        }

        return { result: result.result };
    }

    playTurn(x, y) {
        let result = { gameOver: false };
        
        if (this.currentTurn === 'player') {
          result = this.playerTurn(x, y);
          if (!result.gameOver && !result.error) {
            result = { ...result, ...this.computerTurn() };
          }
        }
        
        if (!result.gameOver) {
          this.displayBoards();
        }
        
        return result;
    }
}
  
module.exports = { Battleship };