const { GameBoard } = require("./gameboard");
const { Player } = require("./player");

class ComputerPlayer extends Player{
    constructor(){
        super('Computer');
        this.gameBoard = new GameBoard();
        this.lastHitCoordinates = [];
        this.potentialTargets = [];
    }

    placeShipRandomly(){
        const shipLengths = [4,3,3,2,2,2,1,1,1,1]; //All ships for game 

        for(const length of shipLengths){
            let placed = false;
            while(!placed){
                try {
                    const direction = Math.random() > 0.5? 'horizontal':'vertical';
                    const x = Math.floor(Math.random()*10);
                    const y = Math.floor(Math.random()*10);

                    this.gameBoard.addShip(direction,{x,y},length);
                    placed = true;
                } catch (error) {
                    
                }
            }
        }
    }

    makeSmartMove(enemyBoard) {
        if (this.lastHitCoordinates.length > 0) {
            if (this.potentialTargets.length > 0) {
                const target = this.potentialTargets.pop();
                try {
                    const result = enemyBoard.receiveAttack(target.x, target.y);
                    
                    if (result.result === 'hit') {
                        this.lastHitCoordinates.push({x: target.x, y: target.y});
                        this.addAdjacentCells(target.x, target.y);
                    }
                    return result;
                } catch (error) {
                    
                    return this.randomAttack(enemyBoard);
                }
            } else {
                const lastHit = this.lastHitCoordinates[this.lastHitCoordinates.length-1];
                this.addAdjacentCells(lastHit.x, lastHit.y);
                
                if (this.potentialTargets.length === 0) {
                    this.lastHitCoordinates = [];
                    return this.randomAttack(enemyBoard);
                }
                
                const target = this.potentialTargets.pop();
                try {
                    return enemyBoard.receiveAttack(target.x, target.y);
                } catch (error) {
                    return this.randomAttack(enemyBoard);
                }
            }
        }
        
        const attackResult = this.randomAttack(enemyBoard);
        
        if (attackResult.result === 'hit') {
            this.lastHitCoordinates.push({ x: attackResult.x, y: attackResult.y });
            this.addAdjacentCells(attackResult.x, attackResult.y);
        }
        
        return { result: attackResult.result, message: attackResult.message };
    }

    addAdjacentCells(x, y) {
        const directions = [
          { dx: -1, dy: 0 }, 
          { dx: 1, dy: 0 },  
          { dx: 0, dy: -1 }, 
          { dx: 0, dy: 1 }   
        ];
        
        for (const dir of directions) {
          const newX = x + dir.dx;
          const newY = y + dir.dy;
          
          // Check if coordinates in board field 
          if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
            // Add coordinates if they not in the potential targets list 
            if (!this.potentialTargets.some(target => target.x === newX && target.y === newY) &&
                !this.lastHitCoordinates.some(hit => hit.x === newX && hit.y === newY)) {
              this.potentialTargets.push({ x: newX, y: newY });
            }
          }
        }
      }
}

module.exports = {ComputerPlayer};