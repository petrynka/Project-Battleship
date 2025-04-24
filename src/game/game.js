const {Ship} = require('./ship');
const {Player} = require('./player');
const {GameBoard} = require('./gameboard');
const {ComputerPlayer} = require('./computerPlayer');

class Battleship{
    constructor(){
        this.playerBoard = new GameBoard();
        this.player = new Player('Human');
        this.computer = new ComputerPlayer();
        this.currentTurn = 'player';
    }

    setup(){
        this.computer.placeShipRandomly();

        
        this.placePlayerShipsDefault();
    }

    placePlayerShipsDefault() {
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
    }

    
    placePlayerShipsRandomly() {
        this.playerBoard.placeShipsRandomly();
    }

    playerTurn(x,y){
        if(this.currentTurn !== 'player'){
            return { error: 'Not your turn' };
        }

        try {
            const result = this.player.attack(this.computer.gameBoard, x, y);

            if(this.computer.gameBoard.isGameOver()){
                return { gameOver: true, winner: 'player' };
            }

            // Only switch turns if it's a miss
            if(result.result === 'miss') {
                this.currentTurn = 'computer';
            }
            
            return { result: result.result };
        } catch (error) {
            console.log(`Error ${error.message}`);
            return { error: error.message };
        }
    }

    computerTurn(){
        if(this.currentTurn !== 'computer'){
            return { error: 'Not computer turn' };
        }

        const result = this.computer.makeSmartMove(this.playerBoard);
    
        if (this.playerBoard.isGameOver()) {
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
          if (!result.gameOver && !result.error && result.result === 'miss') {
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
