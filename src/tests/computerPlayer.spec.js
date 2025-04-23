const {ComputerPlayer} = require('../game/computerPlayer');
const {GameBoard} = require('../game/gameboard');

describe('ComputerPlayer', () => {
    let computerPlayer;
    let playerBoard;
  
    beforeEach(() => {
      computerPlayer = new ComputerPlayer();
      playerBoard = new GameBoard();
    });
  
    test('creates computer player with correct name', () => {
      expect(computerPlayer.name).toBe('Computer');
      expect(computerPlayer.isAI).toBe(true);
    });
  
    test('computer has its own game board', () => {
      expect(computerPlayer.gameBoard).toBeInstanceOf(GameBoard);
    });
  
    test('placeShipsRandomly adds ships to computer board', () => {
      const originalRandom = Math.random;
      Math.random = jest.fn()
        .mockReturnValueOnce(0.6) 
        .mockReturnValueOnce(0.1) 
        .mockReturnValueOnce(0.1) 
        .mockReturnValueOnce(0.6)
        .mockReturnValueOnce(0.3) 
        .mockReturnValueOnce(0.3) 
        .mockReturnValueOnce(0.4) 
        .mockReturnValueOnce(0.5) 
        .mockReturnValueOnce(0.5); 
      
      computerPlayer.placeShipRandomly();
      
      expect(computerPlayer.gameBoard.ships.length).toBeGreaterThan(0);
     
      Math.random = originalRandom;
    });
  
    test('makeSmartMove makes random move when no previous hits', () => {
      computerPlayer.randomAttack = jest.fn().mockReturnValue({ result: 'miss', message: 'Oops! You missed.' });
      
      const result = computerPlayer.makeSmartMove(playerBoard);
      expect(result.result).toBe('miss');
      expect(computerPlayer.randomAttack).toHaveBeenCalled();
    });
  
    test('makeSmartMove targets adjacent cells after a hit', () => {
      computerPlayer.randomAttack = jest.fn().mockReturnValue({ result: 'hit', message: 'Hit!', x: 5,y: 5 });
      
      const originalRandom = Math.random;
      Math.random = jest.fn().mockReturnValue(0.5);
      computerPlayer.makeSmartMove(playerBoard);
      
      expect(computerPlayer.potentialTargets.length).toBeGreaterThan(0);
      
      expect(computerPlayer.lastHitCoordinates.length).toBe(1);

      Math.random = originalRandom;
    });
  
    test('addAdjacentCells adds valid neighbors', () => {
      computerPlayer.addAdjacentCells(5, 5);
      
      expect(computerPlayer.potentialTargets.length).toBe(4);
      
      const validNeighbors = [
        { x: 4, y: 5 },
        { x: 6, y: 5 }, 
        { x: 5, y: 4 }, 
        { x: 5, y: 6 }  
      ];
      
      validNeighbors.forEach(neighbor => {
        expect(
          computerPlayer.potentialTargets.some(target => 
            target.x === neighbor.x && target.y === neighbor.y
          )
        ).toBe(true);
      });
    });
  
    test('addAdjacentCells does not add cells outside board', () => {
      computerPlayer.addAdjacentCells(0, 0);
      
      expect(computerPlayer.potentialTargets.length).toBe(2);
      
      const validNeighbors = [
        { x: 1, y: 0 }, 
        { x: 0, y: 1 } 
      ];
      
      validNeighbors.forEach(neighbor => {
        expect(
          computerPlayer.potentialTargets.some(target => 
            target.x === neighbor.x && target.y === neighbor.y
          )
        ).toBe(true);
      });
    });
  });