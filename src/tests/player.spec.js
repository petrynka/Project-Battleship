const {Player} = require('../game/player');
const {GameBoard} = require('../game/gameboard');

describe('Player', () =>{
    let player;
    let enemyBoard;

    beforeEach(() => {
        player = new Player('testPlayer');
        enemyBoard = new GameBoard();
    });

    test('creates player with correct name', () => {
        expect(player.name).toBe('testPlayer');
        expect(player.isAI).toBe(false);
    });

    test('creates AI player when name is computer', () => {
        const computerPlayer = new Player('Computer');
        expect(computerPlayer.isAI).toBe(true);
    });

    test('player can attack enemy board', () =>{
        enemyBoard.addShip('horizontal',{x:0,y:0},3);
        const result = player.attack(enemyBoard,0,0);
        expect(result.result).toBe('hit');
    });

    test('player can add ship to board', () => {
        const playerBoard = new GameBoard();
        player.addPlayerShip(playerBoard, 'horizontal', 0, 0, 3);
        const boardState = playerBoard.getBoardState();
        expect(boardState[0][0]).toBe('S');
        expect(boardState[0][1]).toBe('S');
        expect(boardState[0][2]).toBe('S');
    });

    test('player can make random attack', () => {
        const originalRandom = Math.random;
        Math.random = jest.fn().mockReturnValue(0.1);
        
        const result = player.randomAttack(enemyBoard);
        expect(result.result).toBe('miss');
        
        Math.random = originalRandom;
    });
});